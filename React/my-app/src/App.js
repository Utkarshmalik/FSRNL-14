import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';
import Login from './Components/Login/Login';
import React from 'react';

//functional components (no state)
//class based components  (state)
//state is a javascript oject
//any piece of data or control you will maintain in a state


//condiitonal rendering


class App extends React.Component{

  constructor(){
    console.log("inside constructor");
    super();
    this.state={isLoggedIn:false};
  }

  onLogin(){
    //validation

    //change the isLoggedInState to true
    this.setState({isLoggedIn:true});
  }

  render(){
    console.log("inside render");
    return (<div>
      {
        (this.state.isLoggedIn)?
        (<> 
         <Navbar/>
          <Main/>
          <Footer/>
      </>
      ):
      <div>
        <h1>Login Form</h1>
        <input type="text" />
        <input type="password" />
        <button onClick={()=>this.onLogin()} >Login</button>
        </div>
      }
  </div>);
  }

}


export default App;
