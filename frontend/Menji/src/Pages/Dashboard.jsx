import Bitmoji from "../assets/Images/Bitmoji.png";
import "./Dash_style.css";
const Dashboard = () => {
  return (
    <div className="Parent">
        <div className="left">
            
            <span className="Heading_task">Today's Mission</span>
            <div className="task">
                Task1
            </div>
            <div className="task">
                Task2
            </div>
            <div className="task">
                Task3
            </div>
            
        </div>
        <div className="side-contents">
            <div className="red-container">
                <img src={Bitmoji} alt="Logo" className="Chechi" />
            </div>
            <div className="details">
                {/* <p>User-Name : Ski<br/>Email-id:ijewej@gmaol.com<br/>Exp : 190<br/>Level:10</p> */}
                <span>User-Name: Ski</span>
                <span>Email: ijewej@gmaol.com</span>
                <span>Exp : 190</span>
                <span>Level:10</span>

            </div>
            <div className="Missions">
                <span className="Missions">Missions</span>
                <li className="myMission">Front-End Development</li>
                <li className="myMission">Back-End Development</li>
            </div>
        </div>
    </div>
  )
}

export default Dashboard

