import User from '../User/User';
import './UsersList.css';


function renderAllUsers(users){
    
    return users.map((user)=>{
        return <User key={user.id} userData={user}  />
    })
}

function UserList(props){
    const users=props.users;

    return <div className='user-list-div' >

     {
         renderAllUsers(users)

     }


    </div>
}

export default UserList;