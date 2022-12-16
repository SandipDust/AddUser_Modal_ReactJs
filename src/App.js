import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";



function App() {
  const [usersList, setUsersList] = useState([]);

  //Adding users
  const addUserHandler = (uName, uAge) =>{
    setUsersList((prevState) =>{
      return [...prevState, {name:uName, age:uAge, id:Math.random().toString()}]
    });
  };

  //Updating List while deleting!
  const updateListOnDelete = (id) =>{
    setUsersList((prevState) => {
      const updatedUsers = prevState.filter((user) => user.id !== id)
      return updatedUsers;
    })
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} onDelete={updateListOnDelete}/>
    </div>
  );
}

export default App;
