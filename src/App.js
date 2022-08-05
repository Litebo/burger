import React, { useState } from 'react';
import './App.css';


function Tomato(){
  const [hidden, setHidden] = useState (false);
  const tomatoStyle = {
  display: "inline",
  color: "white",
  width: "80%",
  height: "50px",
  background: "red",
  margin: "2% auto",
  borderRadius: "12px",
  border: "12px solid transparent",
  };
  return(
    <div>
      {!hidden && <button style={tomatoStyle} onClick={ () => setHidden(true)}>Tomato</button>}
    </div>
  );
}

function Lettuce(){
  const [hidden, setHidden] = useState(false);
  const lettuceStyle = {
  display: "inline",
  color: "white",
  width: "80%",
  height: "50px",
  background: "green",
  margin: "2% auto",
  border: "12px solid transparent",
  borderRadius: "12px",
  };
  return (
    <div8>
      {!hidden && <button style={lettuceStyle} onClick={ () => setHidden(true)}>Lettuce</button>}
    </div8>

  );
}

function Patty(){
  const [hidden, setHidden] = useState (false);
  const pattyStyle = {
  display: "inline",
  color: "white",
  width: "80%",
  height: "70px",
  background: "linear-gradient(#7f3608, #702e05)",
  margin: "2% auto",
  borderRadius: "12px",
  border: "12px solid transparent",
  };
  return(
    <div>
      {!hidden && <button style={pattyStyle} onClick={ () => setHidden(true)}>Meat</button>}
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
    <div> <Patty /> </div>
    <div> <Lettuce /> </div>
    <div className="bread-bottom"> </div>
    <div> <addTomato /> </div>
    </div>
  );
}
export default App;