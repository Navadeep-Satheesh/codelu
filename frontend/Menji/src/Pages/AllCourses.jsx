import "../css/allcourses.css"
import { useState, useEffect } from "react"

const AllCourses = () => {

  var [courses, SetCourses] = useState([])

  function GetAllCourses() {

    fetch("/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: ""
    }).then((response) => {
      return response.json()
    }).then((responseJson) => {
      console.log(responseJson)
      SetCourses(responseJson)

    })
  }

  useEffect(() => {

    GetAllCourses();


  }, [])

  return (
    // <div className="courses">

      <div className="courses_container">

        <div className="allCourses">

          {console.log(courses)}

          {

            Array.from(courses).map((course) => {

              return (

                <div className="singleCourse">

                  <h3 className="singleCourseTitle">{course[4]}</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus veniam itaque harum odio alias reprehenderit ea quas. Animi id facilis enim, nisi reiciendis inventore aperiam eveniet ad esse dolorum?</p>
                  <button onClick={()=>{
                    window.location.href+= "/"+course[0] 
                  }}>VIEW</button>
                </div>

              )

            })
          }


        </div>

      </div>

    // </div>
  )
}

export default AllCourses
