import { useHistory } from 'react-router-dom';
import { useState } from 'react';
const EnterName = () => {

    const history = useHistory();


    const submitName = ()=>{
        if(name === null || name === ""){
            return;
        } 
        history.push({pathname:'/Chat',
    state: {detail:name}});      
        
    }

    const [name, setName] = useState("");
    return (

        <div className="enterName">
            <div className="inputNameDiv">
                <input className="inputName" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your name here!"></input>
                <button onClick={submitName}>Submit</button>
            </div>

            </div>
            );

       

}

export default EnterName;