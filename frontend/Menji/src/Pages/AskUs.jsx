import '../css/askUs.css'
import { useState, useEffect } from 'react'

const AskUs = () => {

    let [messages , setMessages] =  useState([]);

    async function sendMessage(message) {


        fetch("/api/ask_us", {
            method : "POST", 
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({

                'query': message 

            })

        }).then((response)=>{
            return response.json()
        }).then((responseJson)=>{
            console.log(responseJson)
            let newMessages = [...messages];
            newMessages.push({'sender':'bot', 'text': responseJson['text']})
            console.log(messages)
            setMessages(newMessages);

        })

    }

  return (
    <div className='askUs'>

        <div className="chat_area">

            <div className="chatbox">

                    {
                        messages.map((message)=>{

                            return (
                            
                            <div   className = {(message['sender']=='bot')?"bot_message":"user_message"} >
                                <div className = "innerMessage">
                                <span>{message['sender']}</span>
                                <div>{message['text']}</div>
                                </div>
                            </div>

                            )

                        })
                    }

            </div>

            <div className="message_input_area">
                <input type="text" id=  "message_input_box" />
                <button onClick={(event)=>{
                    event.preventDefault();
                    let message = document.getElementById("message_input_box").value ;
                    document.getElementById("message_input_box").value = "";
                    let newMessages = [...messages , {'sender':'you', 'text': message}];
                    messages = newMessages
                    // newMessages.push(messages)
                    setMessages(newMessages);
                    // setTimeout(()=>{sendMessage(message);} , 2000)
                    sendMessage(message);
                    
                }} id = "message_send_button">SEND</button>
            </div>



        </div>
        
      
    </div>
  )
}

export default AskUs
