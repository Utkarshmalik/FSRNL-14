import React from "react";
import {useNavigate} from 'react-router-dom';

function AuthHOC(props){
    const navigate = useNavigate();
    console.log(props);

    const user=JSON.parse(localStorage.getItem("loggedInUser"));
    const {userType}=user;
    const {authorizedPermissions}=props;

    

    if(user===null){
        navigate('/login');
        return;
    }


    //user is authenticated
    if(!authorizedPermissions.includes(userType)){
        return invalidUser();
    }

    //user is authenticated and authorized
    return <div>
        {props.children}
    </div>

}

function invalidUser(){
    return <h1>This page required admin access</h1>
}

export default AuthHOC;