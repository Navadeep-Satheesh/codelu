
import { BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';

// import Home from "./Pages/Home.jsx";
// import LoginPage from "./Pages/LoginPage.jsx";
import AskUs from "./AskUs.jsx";
import Dashboard from "./Dashboard.jsx";
import Community from "./Community.jsx";
import Courses from "./Courses.jsx";


const Home = () => {
  return (
    <div>

        
      <Router>
      <Routes>
        <Route path = "/Dashboard" element = { <Dashboard />} />
        <Route path="/AskUs" element = { <AskUs/>} />
        <Route path="/Community" element = { <Community/>}>
<<<<<<< HEAD
          <Route path = "Community/Friends" element = { <Friends/>} />
=======
          <Route path = "Friends" element = { <Community/>} />
          
>>>>>>> b27222762ae6e6db3f0e1f5002e5a4cc4b905031
          </Route>

        <Route path="/Courses" element = { <Courses/>} />
      </Routes>
      
      </Router>

      {/* <Router>
      <Routes>
        <Route index element = { <Dashboard />} />
        <Route path="/AskUs" element = { <AskUs/>} />
        <Route path="/Community" element = { <Community/>}>
          <Route path = "/Friends" element = { <Community/>} />
          </Route>
        <Route path="/Courses" element = { <Courses/>} />
      </Routes>
      
      </Router> */}
    </div>
  )
}
 

export default Home

