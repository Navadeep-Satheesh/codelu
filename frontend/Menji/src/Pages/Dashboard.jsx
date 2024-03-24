import Bitmoji from "../assets/Images/Bitmoji.png";
import "./Dash_style.css";
import {useState, useEffect} from 'react';
import { MdOutlineDone } from "react-icons/md";

const Dashboard = () => {
    // const[details,setDetails] = useState(null);
    // useEffect(() => {

    //     fetch('/api/Dashboard', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     .then(response => response.json()).then(data => {
    //         setDetails(data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });
    // }, []);
    
    // const [tasks,setTasks] = useState(
    //     [
    //         {
    //             id:1,sambhavam:"Complete the video 1 of React tutorial on FreeCodeCamp"
    //         },
    //         {
    //             id:2,sambhavam:"Do the exercise given by FreeCodeCamp"
    //         },
    //         {
    //             id:3,sambhavam:"Complete the one video of NodeJS on Programming with Mosh"
    //         }
    //     ]
    // );

    // const onClick = (id) => {
        
        
    //   }
  return (
    <div className="Parent">
        <h1 className="mainHeading">DASH BOARD</h1>
        <div className="left">
            
            <span className="Heading_task">Today's Mission</span>
            <div className="allTasks">
            {/* { (details!=null)? details['tasks'].map((d) => (
                        <div className="task">{d}</div>
                    )) : <span className="task">NO TASKS FOR TODAY</span> }  */}
                <div className="task">Complete the video 1 of React tutorial on FreeCodeCamp <MdOutlineDone /></div>
                
                <div className="task">Do the exercise given by FreeCodeCamp <MdOutlineDone /></div>

                <div className="task">Complete the one video of NodeJS on Programming with Mosh<MdOutlineDone /></div>
                <div className="task">Do the program given in the video <MdOutlineDone onClick={(e) => onClick(e)}/></div> 
                
                {/* <TaskComponent tasks = {tasks}/> */}
                
            </div>
        </div>
        <div className="right">
            <div className="right-pane">
                <div className="red-container">
                    <img src={Bitmoji} alt="Logo" className="Chechi" />
                </div>
                <div className="details">
                    
                    <h3 className="info">User-Name: Ski</h3>
                    <h3 className="info">Email: navadeepsatheesh@gmail.com</h3>
                    <h3 className="info">Exp : 160</h3>
                    <h3 className="info">Level:10</h3>

                </div>
                <br />

                <div className="Mission-Container">
                    <span className="Missions">Missions</span>
                    <div className="allMission">
                        <div className="red-card">
                        {/* { (details!=null)? details['tasks'].map((d) => (
                        <span className="myMission">{d}</span>
                    )) : <span className="myMission">NO TASKS FOR TODAY</span> }  */}
                    
                            <span className="myMission">Front-End React</span>
                        </div>
                        <div className="red-card">
                            <span className="myMission">Back-End Node JS</span>
                        </div>
                    </div>
                    
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Dashboard

