import User from '../User/User';
import './UsersList.css';


function renderAllUsers({data,onClick}){


    return data.map((user)=>{
        return <User  key={user.id}   userProps={{user,onClick}}  />
    })
}

function UserList({userProps}){

    return <div className='user-list-div' >

     {
         renderAllUsers(userProps)

     }


    </div>
}

export default UserList;