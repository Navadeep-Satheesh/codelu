
import { BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
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
        <Route index element = { <Dashboard />} />
        <Route path="/AskUs" element = { <AskUs/>} />
        <Route path="/Community" element = { <Community/>}>
          <Route path = "Friends" element = { <Community/>} />
          
          </Route>

        <Route path="/Courses" element = { <Courses/>} />
      </Routes>
      
      </Router>
    </div>
  )
}
 

export default Home

