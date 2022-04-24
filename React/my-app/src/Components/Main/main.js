import React from 'react';
import './main.css';
import UsersList from '../UsersList/UsersList';
import Spinner  from '../Common/Spinner/spinner';


class Main extends React.Component{
    
   allUserData=[];

    constructor(){
        super();
        this.state={data:[], isLoading:true,searchValue:""}
    }

    componentDidMount(){
        fetch("https://dummyapi.io/data/v1/user",{
          headers:{
            "app-id":"61ed31db887c0138889d09ee"
          }
        })
        .then(data=>data.json())
        .then(userData=>{
            this.allUserData=userData.data;
          this.setState({data:userData.data,isLoading:false});
        })
      }

      onSearchFieldChange(e){

        const fieldValue = e.target.value;     
          
          const newData= this.allUserData.filter((user)=>{
              return user.firstName.toLowerCase().startsWith(fieldValue.toLowerCase());
          })

          this.setState({searchValue:fieldValue,data:newData});
      }
    

    render(){
        return(<div className="main-content" >
            <h1>Applied Candidates</h1>

            <div>
                <input onChange={(e)=>this.onSearchFieldChange(e)} value={this.state.searchValue} type="text"/>
            </div>
        
        {
            (this.state.isLoading)? <div className="spinner-div" ><Spinner/></div>:
            <UsersList users={this.state.data} />
        }
        </div>);
    }
}



export default Main;