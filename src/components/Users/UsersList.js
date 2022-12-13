
import Card from "../UI/Card";
import classes from './UsersList.module.css';



const UsersList = (props) =>{
    //Function to delete a particular name
    const deleteHandler = (index) =>{
        const updatedUsers = props.users.filter((user) => user.id !== index)
        props.onDelete(updatedUsers);
    }
    return(
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => 
                    (<li key={user.id}>
                        {user.name} ({user.age} years old)
                        <button id={user.id} onClick={() => deleteHandler(user.id)}>Delete</button>
                    </li>
                    )
                    
                )}
            </ul>
        </Card>
    )

}

export default UsersList;