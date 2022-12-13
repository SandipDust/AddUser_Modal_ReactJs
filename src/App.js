import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";



function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUsersList((prevState) =>{
      return [...prevState, {name:uName, age:uAge, id:Math.random().toString()}]
    });
  };

  //Updating List while deleting!
  const updateListOnDelete = (updatedUsers) =>{
    setUsersList(updatedUsers)
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} onDelete={updateListOnDelete}/>
    </div>
  );
}

export default App;
