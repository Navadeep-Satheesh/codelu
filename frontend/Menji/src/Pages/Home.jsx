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

export default Home;
