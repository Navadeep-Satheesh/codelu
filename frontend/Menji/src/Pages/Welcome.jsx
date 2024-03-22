import React from "react";
import "../css/welcome.css"
import { useState } from "react";

function Welcome(props) {

    function login(event){

        event.preventDefault();

        let email = document.getElementsByClassName("email")[0].value;
        let password = document.getElementsByClassName("password")[0].value;

        

        fetch("/api/signin", {


            method : "POST" ,
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify( {
                email: email, 
                password : password
            })
        }).then((response)=>{

            return response.json()
        }).then((responseJson)=>{

            console.log(responseJson)
            if(responseJson['result']==2){
                
                props.setSignedIn(true)
            }
        })
    }

    let [signInPage, setSignInPage] = useState(false);

    return (

        <>

            <div className="welcome">

                <div className="welcome_topbar">

                    <h3>MINDMENTOR</h3>

                    <button className="welcome_signin" onClick={() => {
                        setSignInPage(true);
                    }}>SIGN IN</button>

                </div>

                <div className="welcome_main" >

                    <h1>MIND MENTOR</h1>

                </div>

                {(signInPage) && <div className="signInPage">

                        <div className="sign_in_container">

                            <form action="/api/signin" method="POST">

                            <h3>SIGN IN</h3>

                            <input type="text" placeholder = "Username" className="email" required />
                            <input type="text" className="password" placeholder="Password" required />

                            <button className="login" onClick={(event)=>{login(event)}} >LOGIN</button>

                            </form>

                        </div>

                </div> }
                    
                    
                




                    {/* </div> */}




        </div>

        </>
    )
}


export default Welcome
