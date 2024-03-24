
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AskUs from './AskUs.jsx';
import Dashboard from './Dashboard.jsx';
import Community from './Community.jsx';
import Courses from './Courses.jsx';
import Friends from './Friend.jsx';
import NavBar from './navbar.jsx';
import AllCourses from './AllCourses.jsx';
import CourseDetails from './CourseDetails.jsx';



const Home = () => {
  return (
    <Router>

      <NavBar/>

      <Routes>
        <Route id path="/" element={<Dashboard />} />
        <Route path="/chatbot" element={<AskUs />} />
        <Route path="/Community" element={<Community />}/>
        <Route path="/Friends" element={<Friends />} />
        <Route path="/courses" element={<Courses />} >

        <Route path="" element={<AllCourses />} />
        <Route path=":id" element={<CourseDetails />} />


        </Route>
      </Routes>
    </Router>
  );
};

export default Home;

import React from 'react'


