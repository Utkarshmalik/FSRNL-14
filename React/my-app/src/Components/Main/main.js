import React, { useEffect,useState } from 'react';
import './main.css';
import UsersList from '../UsersList/UsersList';
import Spinner  from '../Common/Spinner/spinner';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


let allUserData=[];


function Main(){
    
    const [data,changeData] = useState([]);
    const [isLoading,changeIsLoading] = useState(true);
    const [searchValue,changeSearchValue] = useState("");


    function reset()
    {
        changeData([]);
        changeIsLoading(true);
        changeSearchValue("");
    }

    function UpdateData()
    {
        fetch("https://dummyapi.io/data/v1/user",{
            headers:{
              "app-id":"61ed31db887c0138889d09ee"
            }
          })
          .then(data=>data.json())
          .then(userData=>{
              allUserData=userData.data;
              console.log(allUserData);

              changeData(userData.data);
              changeIsLoading(false);
          })
    }

    useEffect(()=>{
        UpdateData();
    },[]);


      function onSearchFieldChange(e){
        const fieldValue = e.target.value; 
        console.log(allUserData);
   
          
          const newData= allUserData.filter((user)=>{
              return user.firstName.toLowerCase().startsWith(fieldValue.toLowerCase());
          })

          changeSearchValue(fieldValue);
          changeData(newData);
      }

   

        function onBackButtonClick()
        {
            reset();
            UpdateData();
        }
    

        return(<div className="main-content" >
                 <h1>Applied Candidates</h1>
                    <div>
                        <input onChange={(e)=>onSearchFieldChange(e)} value={searchValue} type="text"/>
                    </div>
                {
                    (isLoading)? <div className="spinner-div" ><Spinner/></div>:
                  (<UsersList userProps={{data:data}} />)
                }
        </div>);
}



export default Main;