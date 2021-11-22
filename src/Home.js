import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { useHistory } from 'react-router-dom';
import elnour from './Images/ElnourPic.png';

const Home = () => {

    const history = useHistory();


    useEffect(() => {
        console.log('use effect ran');
    })

    return (
        <div className="home">

            <div className = "pictureDiv">
                <img className="picture" src={elnour} alt="" />
                <h2>Heter jag Elnour?</h2>
            </div>
            <button onClick={() => history.push('/EnterName')}>Start chat with Elnour!</button>


        </div>
    );
}

export default Home;