import { BrowserRouter as Routes,Routes,Route, BrowserRouter} from 'react-router-dom';
// import Home from "./Pages/Home.jsx";
// import LoginPage from "./Pages/LoginPage.jsx";
import AskUs from "./AskUs.jsx";
import Dashboard from "./Dashboard.jsx";
import Community from "./Community.jsx";
import Courses from "./Courses.jsx";


const Home = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element = { <Dashboard />} />
        <Route path="/AskUs" element = { <AskUs/>} />
        <Route path="/Communitty" element = { <Community/>} />
        <Route path="/Courses" element = { <Courses/>} />
      </Routes>
      
      </BrowserRouter>
      <h1>
        Home Page
      </h1>
    </div>
  )
}
 

export default Home
