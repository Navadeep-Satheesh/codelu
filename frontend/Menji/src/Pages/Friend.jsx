import React from "react";
import { useEffect,useState } from "react";
const Friends  = () => {
  const handleDelete =(username) =>{
    const newdata = data.filter(data => data.username != username);
    setData(newdata);
  }
  const[ data, setData] =useState([]);
  const [status,setStatus]=React.useState(true)
  //type the url for friends
  
  useEffect(()=>{

      fetch('/api/friends',{
          method:"POST",
          headers:{
              "content-Type":"application/json"
          },
          body:JSON.stringify({
              username:username
          })
      }).then((response)=>{
          return response.json() 
      }).then((data)=>{
          setData(data)
      })
  },[]);

  ///

useEffect(()=>{

      fetch('/api/friends',{
          method:"POST",
          headers:{
              "content-Type":"application/json"
          },
          body:JSON.stringify({
              username:getElementById.target.value
          })
      }).then((response)=>{
          return response.json() 
      }).then((data)=>{
          setData(data)
      })
  },[]);
  //
  

  fetch('/api/friends',{
    method:"DELETE",
    headers:{
        "content-Type":"application/json"
    },
    body:JSON.stringify({
        username:username
    })
}).then((response)=>{
    return response.json() 
}).then((data)=>{       
    setData(data)
})

  return (
        <div className="right">
          <h1>LEADER BOARD</h1>
            {data.map((data) => (
                <div className="dataview"> 
                <h2>{data.fname}</h2>
                <p>{data.flevel}<br/>{data.fscore}</p>
                <button className="remove" onClick={() => handleDelete(data.username)}>remove</button>
                </div>
                ))} 
                  <button onClick={()=>(!status)}>ADD</button>
                  {
                    status?<div className="add">
                      <input
                      type="text"
                      placeholder="search"


                      />
                      <button onClick={()=>document.getElementById.target.value
                      }>search</button>
                    
                    </div> :null
                  }
                   
        </div>
  )
}

export default Friends
