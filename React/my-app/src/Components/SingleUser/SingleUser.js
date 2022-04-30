import React from 'react';
import Spinner from '../Common/Spinner/spinner';
import './SingleUser.css';


class SingleUser extends React.Component{

    constructor(){
        super();
        this.state=({userDetails:null})
    }

    componentDidMount(){
        fetch(`https://dummyapi.io/data/v1/user/${this.props.id}`,{
            headers:{
              "app-id":"61ed31db887c0138889d09ee"
            }
          })
          .then(data=>data.json())
          .then(userData=>{
             console.log(userData);
             this.setState({userDetails:userData});
          })
        }

    render(){
        return <div className="single-user-parent">
            <button onClick={this.props.onBackButtonClick} className="single-user-parent-button"> Go Back</button>
        {
        (!this.state.userDetails)?<Spinner/>:
        (            
            <div className="single-user-div" >
                <div className="single-user-div-img">
                <img src= {this.state.userDetails.picture} />
                </div>

                <div  className="single-user-div-details" >
                    <div className="single-user-div-details-inner" >
                      <h3>{`${this.state.userDetails.title.toUpperCase()} ${this.state.userDetails.firstName}  ${this.state.userDetails.lastName}`}</h3>  
                      <h4>{`Gender: ${this.state.userDetails.gender}`}</h4>  
                      <h4>{`Email: ${this.state.userDetails.email}`}</h4>  
                      <h4>{`DOB: ${this.state.userDetails.dateOfBirth}`}</h4>  
                      <h4>{`phone: ${this.state.userDetails.phone}`}</h4>  
                    </div> 
                </div>
            </div>
        )
        }
        </div>

    }

}


export default SingleUser;