import { useRef } from "react";
import useTodo from "../../hooks/use-todo";
import { Todo } from "../expenses/type";
import { QueryClient, useMutation } from "@tanstack/react-query";
import apiClient from "../../services/api-client";

interface AddTodoContext {
  previousTodos: Todo[];
}
const GetTodos = () => {
  const queryClient = new QueryClient();
  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationKey: ["todos", "add"],
    mutationFn: (todo: Todo) =>
      apiClient.post<Todo>("/todos", todo).then((res) => res.data),
    onMutate: async (newTodo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos ? [newTodo, ...todos] : [newTodo]
      );
      if (todo.current?.value) todo.current.value = "";
      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      console.log("error", error);
      if (!context) return;
      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
    },
  });
  const todo = useRef<HTMLInputElement>(null);
  const { data, isLoading, error } = useTodo();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error?.message}</div>
      )}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (todo.current?.value)
            addTodo.mutate({
              id: 0,
              title: todo.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="mb-3">
          <div className="row flex-nowrap align-items-center">
            <div className="col-10">
              <input ref={todo} className="form-control" type="text" />
            </div>
            <div className="col-auto">
              <button disabled={addTodo.isPending} className="btn btn-primary">
                {addTodo.isPending ? "Adding..." : "Add"}
              </button>
            </div>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {data.map((todo: Todo) => {
          return (
            <li key={todo.id} className="list-group-item">
              {todo.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GetTodos;
