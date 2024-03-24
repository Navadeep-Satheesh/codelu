import React from "react";
import "../css/welcome.css"
import { useState } from "react";

function Welcome(props) {

    let [signInPage, setSignInPage] = useState(false);

    function login(event){
        event.preventDefault();
        fetch("/api/signin", {
            method: "POST", 
            headers:{
                "Content-Type":"application/json"
            }, 
            body : JSON.stringify( {

                email : document.getElementsByClassName("email")[0].value,
                password : document.getElementsByClassName("password")[0].value

            }
            )
        }).then((response)=>{
            return response.json()
        }).then((responseJson)=>{

            if(responseJson['result'] == 2){
                 props.setSignedIn(true)
            }
        })


    }

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

                            <input type="text" placeholder = "Username" className="email" required  name = "email"  />
                            <input type="text" className="password" placeholder="Password" required name="password"/>

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
