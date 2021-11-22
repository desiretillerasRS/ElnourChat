import {useEffect, useRef} from "react";

const Messages = ({ messages }) => { 

    const messagesEndRef = useRef(null)

    

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }

      useEffect(()=>{
        scrollToBottom();
      });
    return (

        <div className="parentDiv">

            {messages.map((message) => (
                <div className="messageDiv" key={message.id} style={ {alignSelf: message.userName === 'Elnour' ? "flex-start" : "flex-end"}}>
                    <div className="card" style={{backgroundColor: message.userName === 'Elnour' ? "#1275af" : "#bd81b3"}}>
                        <p className="newChat">{message.message}</p>
                    </div>
                    <div className="userNameDiv">
                        <p className="userName">{message.userName}</p>
                    </div>
                </div>
            ))}

<div ref={messagesEndRef} />
        </div>
                    );

}

export default Messages;