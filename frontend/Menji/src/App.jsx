
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';



import './App.css'
import { useState } from 'react';
import Home from "./Pages/Home"
import Welcome from "./Pages/Welcome"


function App() {

  var  [signedIn , setSignedIn ] = useState(false);

  fetch("localhost:5000/check_login", {
    method: "POST" , 
    headers:{
      "Content-Type" : "application/json"
    }, 
    body: ""
  }).then((response)=>{
    return response.json();
  }).then((responseJson)=>{

      if(responseJson['loggedIn']){
        setSignedIn(true);
      }

  })
  
  return (
    <>


    thi is app.js

    {
      (!signedIn)&& <Welcome/>
      
    }

    {
      (signedIn)&& <Home/>
    }
      


    </>
  )
}

export default App
