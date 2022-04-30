import React from 'react';
import './main.css';
import UsersList from '../UsersList/UsersList';
import SingleUserView from '../SingleUser/SingleUser';
import Spinner  from '../Common/Spinner/spinner';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


class Main extends React.Component{
    
   allUserData=[];

    constructor(){
        super();
        this.state={data:[], isLoading:true,searchValue:"",singleView:null}
    }


    reset()
    {
        this.setState({data:[], isLoading:true,searchValue:"",singleView:null});
    }

    UpdateData()
    {
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

    componentDidMount(){
        this.UpdateData();
      }

      onSearchFieldChange(e){
        const fieldValue = e.target.value;     
          
          const newData= this.allUserData.filter((user)=>{
              return user.firstName.toLowerCase().startsWith(fieldValue.toLowerCase());
          })

          this.setState({searchValue:fieldValue,data:newData});
      }

      onUserClick(id){
        this.setState({singleView:id});
        }

        onBackButtonClick()
        {
            this.reset();
            this.UpdateData();
        }
    

    render(){
        return(<div className="main-content" >

            {
                (!this.state.singleView)?( 
                
                <>
                 <h1>Applied Candidates</h1>
                    <div>
                        <input onChange={(e)=>this.onSearchFieldChange(e)} value={this.state.searchValue} type="text"/>
                    </div>
                {
                    (this.state.isLoading)? <div className="spinner-div" ><Spinner/></div>:
                  (<UsersList userProps={ {data:this.state.data, onClick:this.onUserClick.bind(this)} } />)
                }
                </>
                ):
                <SingleUserView onBackButtonClick={this.onBackButtonClick.bind(this)} id={this.state.singleView} />
                }


        
        </div>);
    }
}



export default Main;