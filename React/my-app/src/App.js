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
    super();
    this.state={isLoggedIn:false};
  }

  onLogin(){
    //validation

    //change the isLoggedInState to true
    this.setState({isLoggedIn:true});
  }


  

  render(){
    return (<div>
      {
        (this.state.isLoggedIn)?
        (<> 
         <Navbar/>
          <Main/>
          <Footer/>
      </>
      ):
      <Login onLogin={()=>this.onLogin()} />
      }
  </div>);
  }

}


export default App;
