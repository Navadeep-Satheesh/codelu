<<<<<<< HEAD

import { BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';

// import Home from "./Pages/Home.jsx";
// import LoginPage from "./Pages/LoginPage.jsx";
import AskUs from "./AskUs.jsx";
import Dashboard from "./Dashboard.jsx";
import Community from "./Community.jsx";
import Courses from "./Courses.jsx";
import CourseDetails from './CourseDetails.jsx';
import AllCourses from './AllCourses.jsx';


import NavBar from './navbar.jsx';


const Home = () => {
  return (
    <div>

        
      <Router>
        <NavBar/>
      <Routes>
<<<<<<< HEAD
        <Route index element = { <Dashboard />} />
<<<<<<< HEAD
        <Route path="/chatbot" element = { <AskUs/>} />
        <Route path="/Communitty" element = { <Community/>} />
        <Route path="/Courses" element = { <Courses/> } > 
            
            
            <Route path =""  element= {  <AllCourses/> } />
            <Route path =":course_id"  element= {  <CourseDetails/> } />
        
        </Route>

      </Routes>
      
      </Router>
    
    
    
=======
=======
        <Route path = "/Dashboard" element = { <Dashboard />} />
>>>>>>> b27222762ae6e6db3f0e1f5002e5a4cc4b905031
        <Route path="/AskUs" element = { <AskUs/>} />
        <Route path="/Community" element = { <Community/>}>
          <Route path = "Friends" element = { <Community/>} />
          
          </Route>

        <Route path="/Courses" element = { <Courses/>} />
      </Routes>
      
      </Router>
>>>>>>> ee69e11b8ea423c128f2fe4774747b771930b106
    </div>
  )
}
 

export default Home
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AskUs from './AskUs.jsx';
import Dashboard from './Dashboard.jsx';
import Community from './Community.jsx';
import Courses from './Courses.jsx';
import Friends from './Friend.jsx';

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/AskUs" element={<AskUs />} />
        <Route path="/Community" element={<Community />}/>
        <Route path="/Friends" element={<Friends />} />
        <Route path="/Courses" element={<Courses />} />
      </Routes>
    </Router>
  );
};
>>>>>>> 78bf8c23f220048da12cc8adebc04e55980d84c0

export default Home;
