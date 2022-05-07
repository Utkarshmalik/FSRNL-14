import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route,Routes, useNavigate } from 'react-router-dom';
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';
import Login from './Components/Login/Login';
import Features from './Components/Features/Features';
import Pricing  from './Components/Pricing/Pricing';
import React from 'react';
import SingleUser from './Components/SingleUser/SingleUser';

//functional components (no state)
//class based components  (state)
//state is a javascript oject
//any piece of data or control you will maintain in a state


//condiitonal rendering



function App(){  

  function onLogin(navigate){
    //validation
    //change the isLoggedInState to true
    console.log("logged in");
  
    navigate('/pricing');
  }
  

  let navigate = useNavigate();

    return (<div>

      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="users" element={<Main />} />
      <Route path="users/:id" element={<SingleUser />} />
      <Route path="features" element={<Features />} />
      <Route path="pricing" element={<Pricing />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </div>
  );
  
}


export default App;
