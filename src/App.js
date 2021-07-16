import { useState } from "react";
import "./App.css";
import AddUser from "./AddUser"
function App() {
  // const userData = [
  //   {
  //     id: 1,
  //     firstName: "Manisha",
  //     lastName: "Bhapkar",
  //   },
  // ];

  const [users, setUsers] = useState([]);
  const deleteUser = (id) => {
    setUsers(users.filter((item) => item.id !== id))
  };
  // const addUser = (user) => {
  //   console.log("user", user);
  //   user.id = users.length + 1;
  //   setUsers([
  //     ...users,
  //     user,
  //   ]);
  // };

  return <div className="App">
    {/* <AddUser  addUser={addUser} users={users}/> */}
    <AddUser deleteUser={deleteUser}/>

  </div>;
}

export default App;
