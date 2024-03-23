

const communitylist = () => {

  const[ data, setData] =useState([]);
  //type the url for friends
  
  useEffect(()=>{

      fetch('/api/',{
          method:"POST",
          headers:{
              "content-Type":"application/json"
          },
          body:JSON.stringify({
              fname:fname,
              flevel:flevel,
              fscore:fscore,
              username:username
          })
      }).then((response)=>{
          return response.json() 
      }).then((data)=>{
          setData(data)
      })
  },[]);
  
  return (
        <div className="right">
          <h1>LEADER BOARD</h1>
            {data.map((data) => (
                <div className="dataview"> 
                <h2>{data.fname}</h2>
                <p>{data.flevel}<br/>{data.fscore}</p>
                <button className="remove" onClick={() => handleDelete(data.username)}>remove</button>
                <button className="add" onClick={alert("contact will be deleted")}>add</button>
                </div>
                ))}   
        </div>
  )
}

export default Friends
