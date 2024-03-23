import Bitmoji from "../assets/Images/Bitmoji.png";
import "./Dash_style.css";

const Dashboard = () => {
  return (
    <div className="Parent">
        <h1 className="mainHeading">DASH BOARD</h1>
        <div className="left">
            
            <span className="Heading_task">Today's Mission</span>
            <div className="allTasks">
                <div className="task">
                    Task1
                </div>
                <div className="task">
                    Task2
                </div>
                <div className="task">
                    Task3
                </div>
                <div className="task">
                    Task3
                </div>
                <div className="task">
                    Task3
                </div>
                <div className="task">
                    Task3
                </div>
                <div className="task">
                    Task3
                </div>
                <div className="task">
                    Task3
                </div>
                <div className="task">
                    Task3
                </div>
            </div>
        </div>
        <div className="right">
            <div className="right-pane">
                <div className="red-container">
                    <img src={Bitmoji} alt="Logo" className="Chechi" />
                </div>
                <div className="details">
                    
                    <h3 className="info">User-Name: Ski</h3>
                    <h3 className="info">Email: ijewej@gmaol.com</h3>
                    <h3 className="info">Exp : 190</h3>
                    <h3 className="info">Level:10</h3>

                </div>
                <br />

                <div className="Mission-Container">
                    <span className="Missions">Missions</span>
                    <div className="red-card">
                        <span className="myMission">Front-End Development</span>
                    </div>
                    <div className="red-card">
                        <span className="myMission">Back-End Development</span>
                    </div>
                    
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Dashboard

