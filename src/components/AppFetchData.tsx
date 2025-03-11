// import GetUsers from "./dataFetching/GetUsers"
// import GetPosts from "./posts/GetPosts"

import GetTodos from "./todo/GetTodos"

const AppFetchData = () => {
  return (
    <div className="p-10">
      {/* <GetUsers /> */}
      {/* <GetPosts /> */}
      <GetTodos />
    </div>
  )
}

export default AppFetchData
