import React, { useState } from 'react';
import './App.css';


function Tomato(){
  const [hidden, setHidden] = useState (false);
  const tomatoStyle = {
  width: "80%",
  height: "12%",
  background: "red",
  margin: "2% auto",
  borderradius: "10px",
  };
  return(
    <div style={tomatoStyle}>
      {!hidden && <button onClick={ () => setHidden(true)}>Tom</button>}
    </div>
  );
}

function Lettuce(){
  const [hidden, setHidden] = useState(false);
  const lettuceStyle = {
  width: "80%",
  height: "12%",
  background: "green",
  margin: "2% auto",
  borderradius: "3px",
  };
  return (
    <div style={lettuceStyle}>
      {!hidden && <button onClick={ () => setHidden(true)}>Let</button>}
    </div>

  );
}

function App(){  
//const [hidden, setHidden] = useState(false);
  return (
    <div className="App">
    <h1> Regular Burger </h1>
    <div className="bread-top"> </div>
    <div> <Tomato /> </div>
    <div className="patty"> </div>
    <div> <Lettuce /> </div>
    <div className="bread-bottom"> </div>
    </div>
  );
}
export default App;