import dessiImage from "./Images/Dessi.jpg";
import amandaImage from "./Images/amanda.jpg";

const About = () => {
  return (
    <div>
      <p>This is a page about us who created this Elnour Chat!</p>
      <div style={{ display: "inline-block", margin:50 }}>
        <img src={dessiImage} style={{width: 150}}></img>
        <p>Desiré Tillerås</p>
      </div>
      <div style={{display:'inline-block', margin:50}}>
        <img
          src={amandaImage}
          style={{width: 150 }}
        ></img>
        <p>Amanda Eriksson</p>
      </div>
    </div>
  );
};

export default About;
