
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import './App.css'
import { useState, useEffect } from 'react';
import Home from "./Pages/Home"
import Welcome from "./Pages/Welcome"


function App() {

  var [signedIn, setSignedIn] = useState(false);

  useEffect(() => {


    fetch("/api/check_login", {
      method: "POST",
      headers: {

        "access-control-allow-origin": "*",
        "Content-Type": "application/json"
      },
      body: ""
    }).then((response) => {
      return response.json();
    }).then((responseJson) => {

      if (responseJson['loggedIn']) {
        console.log("singed in")
        setSignedIn(true);
      }

    })

  }, [])

  
  return (
    <>



      {
        (signedIn == false) && <Welcome setSignedIn={setSignedIn} />

      }

      {
        (signedIn) && <Home />
      }



    </>
  )
}

export default App
