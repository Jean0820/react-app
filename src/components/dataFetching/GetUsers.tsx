import { useEffect, useState } from "react";
import { CanceledError } from "../../services/api-client";
import userService, { User } from "../../services/user-service";

const GetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  
  
  useEffect(() => {
    setLoading(true);
    const { request } = userService.getAll<User[]>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error);
        setLoading(false);
      });

    // return cancel();
  }, []);

  const handleDeleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete<User>(user).catch((error) => {
      setError(error);
      return setUsers(originalUsers);
    });
  };

  const handleAddUser = () => {
    const originalUsers = [...users];
    const newUsers = {
      id: 0,
      name: "Jean Marc Mufind",
      email: "makayamufind@gmail.com",
    };
    setUsers([...users, newUsers]);

    userService
      .create<User>(newUsers)
      .then(({ data }) => {
        setUsers([...users, data]);
      })
      .catch((error) => {
        setError(error);
        return setUsers(originalUsers);
      });
  };

  const HandleUpdateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: "Jean Marc Makaya" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService
      .update<User>(user)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        return setUsers(originalUsers);
      });
  };

  if (loading) {
    return <div className="spinner-border m-2"></div>;
  }
  if (error) {
    return <p className="text-danger text-2xl">{error.message}</p>;
  }
  return (
    <>
      <div className="p-10">
        <button
          className="btn btn-primary mb-3"
          onClick={() => handleAddUser()}
        >
          Add
        </button>
        {users.map((user) => (
          <ul key={user.id} className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              {user.name}
              <div className="d-flex gap-10">
                <button
                  className="btn btn-outline-secondary text-secondary hover:!text-white"
                  onClick={() => HandleUpdateUser(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger text-danger hover:!text-white"
                  onClick={() => handleDeleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default GetUsers;
