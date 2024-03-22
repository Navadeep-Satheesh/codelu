import React  from "react";
import "../css/welcome.css"

function Welcome(){

    // let [ signInPage , setSignInPage] =  useState("")

    return (

        <>

        <div className="welcome">

                <div className="welcome_topbar">

                    <h3>MINDMENTOR</h3>

                    <button className="welcome_signin">SIGN IN</button>

                </div>

                <div className="welcome_main">

                    <h1>MIND MENTOR</h1>

                </div>
                
                This is welcome Page

        </div>
            
        </>
    )
}


export default Welcome
