import React,{useEffect, useState} from 'react';
import Spinner from '../Common/Spinner/spinner';
import { useParams } from "react-router-dom";
import './SingleUser.css';
import AuthHoc from '../../HOC/AuthHOC';



function SingleUser()
{
    let params = useParams();
    console.log(params.id);
    let [userDetails,changeUserDetails] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3000/users/${params.id}`,{
            headers:{
              "app-id":"61ed31db887c0138889d09ee"
            }
          })
          .then(data=>data.json())
          .then(userData=>{
             console.log(userData);
             changeUserDetails(userData);
          })
    },[]);

    return <div className="single-user-parent">
{
(!userDetails)?<Spinner/>:
(            
    <div className="single-user-div" >
        <div className="single-user-div-img">
        <img src= {userDetails.picture} />
        </div>

        <div  className="single-user-div-details" >
            <div className="single-user-div-details-inner" >
              <h3>{`${userDetails.title.toUpperCase()} ${userDetails.firstName}  ${userDetails.lastName}`}</h3>  
              <h4>{`Gender: ${userDetails.gender}`}</h4>  
              <h4>{`Email: ${userDetails.email}`}</h4>  
              <h4>{`DOB: ${userDetails.dateOfBirth}`}</h4>  
              <h4>{`phone: ${userDetails.phone}`}</h4>  
            </div> 
        </div>
    </div>
)
}
</div>
}



export default SingleUser;