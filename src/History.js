import { useEffect, useState } from "react";
import Messages from "./Messages";

const History = () => {

    async function getData(url = '') {

      await fetch(url).then(response => response.json()).then(messages => {setMessages(messages)});            

    }

    useEffect(()=>{

        getData("http://localhost:4000/messages");
    },[])

    const [messages, setMessages] = useState(null);

    return (

        <div className="chatInputDiv">

            {messages && <Messages messages={messages}/>}

        </div>

    );
}

export default History;