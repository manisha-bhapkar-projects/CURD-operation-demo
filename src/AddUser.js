import React, { useState } from "react";

const AddUser = (props) => {
  const [users, setUsers] = useState([
         {
      id: 1,
      firstName: "Manisha",
      lastName: "Bhapkar",
    },
  ]);

  const initialValues = {
    id: "",
    firstName: "",
    lastName: "",
  };

  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const addUser = (user) => {
    console.log("user", user);
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // alert("hi")
    console.log();
    // if (!user.firstName || !user.lastName) return
    addUser(user);
    // console.log("user", user);
    // user.id = users.length + 1;
    // setUsers([
    //   ...users,
    //   user,
    // ]);
    setUser(initialValues);
  };

  const deleteUser = (id) => {
    //   alert("delete")
      console.log("id", id);

    setUsers(users.filter((item) => 
    item?.id !== id)
    )
  };

  const edituser = (id) => {
    // console.log("id", id);
    // setUsers()
  };

  

  return (
    <>
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
      />
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add User</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
           users && users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <button onClick={()=>deleteUser(user.id)}>Delete</button>
                  &nbsp; &nbsp;
                  <button onClick={()=>edituser(user.id)}>Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default AddUser;
