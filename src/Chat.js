import { useLocation } from "react-router";
import React, { useState, useEffect } from "react";
import Messages from "./Messages";



const Chat = (props) => {

    const location = useLocation();

    let userSentMessage = false;

    const elnour = ['..är jättemycket snö', 'Inte normalt', 'Och jag är ny här i... i .. Sverige',
'Men det är jättesvårt', 'Ja!', 'De de de.. de vet inte!', 'Jag kommer från Sudan', 'Nä dä dä dä de.. 50 grader varmt',
 'Men jag har bara 3 dar, jag kom tillbaka', 'Jag reser där till för en månad', 'Ja det är bra!', 'De e mycket bra vädret',
'Heter jag Elnur?', 'Elnur, ja det är förnamn', 'Isak Adam', 'Nej!', 'E, S, H, G, Nej!']

    const userName = location.state.detail;

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([]);

    const typing = document.querySelector('#elnour-typing');

    let [isUser, setIsUser] = useState(false);

    useEffect(() => {

        if (isUser) {
            elnourSendMessage();
            setIsUser(false);
        }
        

    }, [messages]);

    const addMessage = (userName, messageText) => {

        let newId;
        if (messages.length < 1) {
            newId = 1;
        } else {
            newId = messages[messages.length - 1].id + 1;
        }
        const newMessage = { userName: userName, message: messageText, id: newId };

        const newMessageArray = messages.filter(message => message.id);

        newMessageArray.push(newMessage);

        setMessages(newMessageArray);

    }

    const messageSentByUser = () => {

        setIsUser(true);

        addMessage(userName, message);

        setMessage('');
    }

    const elnourSendMessage = () => {
        console.log("Hejsan");
        setTimeout(() => {
            typing.setAttribute("style", "display:block");
        }, 500);
        setTimeout(() => {
            const newMessage = elnour[Math.floor(Math.random() * (elnour.length))]
            addMessage('Elnour', newMessage);
            typing.setAttribute("style", "display:none");

        }, 3000);

    }

    return (

        <div className="chat">
            <div className="chatInputDiv">
                <Messages messages={messages} userName={userName} />
                
                <div id="textbox-div" className="inputNameDiv">
                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" className="chatInput inputName" placeholder="Write a message here.."/>
                <button onClick={messageSentByUser} className="send">Send</button>
                </div>
            </div>
            <div className="typing">
                <p id="elnour-typing" style={{ display: "none" }}>Elnour is typing..</p>
            </div>

        </div>
    );
}

export default Chat;