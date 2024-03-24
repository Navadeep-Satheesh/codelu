import React from 'react';
import '../css/navbar.css'
import { useState } from 'react';
import { Link} from 'react-router-dom';

import "../css/navbar.css"

// import dashboard_icon from '../assets/images/navbar/dashboard.png'

import dashboard from '../assets/Images/navbar/dashboard.svg'
import chat from '../assets/Images/navbar/chat.svg'
import courses from '../assets/Images/navbar/courses.svg'
import community from '../assets/Images/navbar/community.svg'

// import community from '@mui/icons-material/People';
// import dashboard from '@mui/icons-material/Dashboard';
// import courses from '@mui/icons-material/LibraryBooks';
// import chat from '@mui/icons-material/Forum';

import arrow_icon from "../assets/Images/navbar/arrow.png"

function NavBar(){



    var [ navbarDisplay , setNavbarDisplay ] =  useState(false)

    console.log( navbarDisplay)

    function show_hide_nav(){

        console.log("clicked")
        console.log( navbarDisplay.hidden)

        let navbar = document.getElementsByClassName("navbar")[0];
        let show_hide_image = document.querySelector('.show_hide img')

        if(navbarDisplay){
            
            setNavbarDisplay( false );
            show_hide_image.style.transform  = 'ScaleX(-1)'
            navbar.style.width = '5vw'
            
        }else{
            
            setNavbarDisplay(true);
            show_hide_image.style.transform  = 'ScaleX(1)'
            navbar.style.width = '15vw'
        }


    }

    return (
        <>

        <div className="navbar">

            <button className="show_hide" onClick={show_hide_nav}><img src={arrow_icon} alt="" /></button>

   

            <ul className="links">  

                {/* <li>  <img src="../res/icons/navbar/dashboard.png" alt="" /> <span>Dashboard</span>  </li> */}
                <li > <Link to = "/" className='link'>  <img src= {dashboard} alt="image" />       { navbarDisplay && <span>Dashboard</span>}  </Link> </li> 

                <li>   <Link to="/chatbot" className='link'> <img src= {chat} alt="image" />   { navbarDisplay && <span>Chatbot</span>}</Link>       </li> 

                <li >  <Link to ="/courses" className='link'><img src={courses} alt="image" /> { navbarDisplay &&  <span>Courses</span>}</Link>   </li> 

                <li >  <Link to= "/community" className='link'><img src={community} alt="image" /> { navbarDisplay &&  <span>Community</span>} </Link>  </li> 

            </ul>
        </div>

        </>
    )

}

export default NavBar;