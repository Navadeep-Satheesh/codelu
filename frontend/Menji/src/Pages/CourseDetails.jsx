import "../css/courseDetails.css"
import { useState , useEffect} from "react"
function CourseDetails(){

    let list = location.href.split("/")
    let courseid = list[list.length - 1]

    let  [courseData , setCourseData ] = useState(null);

    function getCourseData(){

        fetch("/api/course_details" , {
            method:"POST",
            "headers": {
                "Content-Type":"application/json", 
            }, 
            body : JSON.stringify({

                courseid : courseid
            })
        }).then((response)=>{
            return response.json()
        }).then((responseJson)=>{
            console.log(responseJson)
            setCourseData(responseJson)
        })

    }

    useEffect(()=>{
        getCourseData();
    }, [])

    return(

        <>

            <div className="course_details">

                <h1> {(courseData!=null)? courseData['course_data'][4]  : "Details" }</h1>

                {/* <table> */}

                    {/* <tr> */}
                        {/* <td>Assigned At</td> */}
                        {/* <td></td> */}
                    {/* </tr> */}

                {/* </table> */}


                <div className="allTasks">

                    {

                        ( courseData!=null )? courseData['tasks'].map((task)=>{
                            
                            return (
                            <div className="singleTask">

                                <span>{task[0]}</span>
                                <input type="checkbox" />

                            </div>
                            )

                        }): ""

                       
                    }

                </div>

             

            </div>

        </>

    )
}

export default CourseDetails