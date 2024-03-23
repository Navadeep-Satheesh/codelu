
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
        <Route index element = { <Dashboard />} />
        <Route path="/chatbot" element = { <AskUs/>} />
        <Route path="/Communitty" element = { <Community/>} />
        <Route path="/Courses" element = { <Courses/> } > 
            
            
            <Route path =""  element= {  <AllCourses/> } />
            <Route path =":course_id"  element= {  <CourseDetails/> } />
        
        </Route>

      </Routes>
      
      </Router>
    
    
    
    </div>
  )
}
 

export default Home

