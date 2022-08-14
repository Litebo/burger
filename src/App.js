import React, { useState } from 'react';
import './App.css';

function Tomato(){
    const [tomato, setTomato] = useState (false);
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
        {!tomato && <button style={tomatoStyle} onClick={ () => setTomato(true)}>Tomato</button>}
      </div>
    );
  }

  function Lettuce(){
    const [lettuce, setLettuce] = useState(false);
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
        {!lettuce && <button style={lettuceStyle} onClick={ () => setLettuce(true)}>Lettuce</button>}
      </div8>
  
    );
  }

  function Patty() {
    const [patty, setPatty] = useState (false);
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
        {!patty && <button style={pattyStyle} onClick={ () => setPatty(true)}>Meat</button>}
      </div>
    ); 
  }

  function AddPatty ({patty, setPatty}) {
    return(
      <div>
        {<button onClick={Patty}>Add Patty</button>}
      </div>
    );
  }
  function App(){  
  return (
    <div className="App">
    <h1> Regular Burger </h1>
    <div className="bread-top"> </div>
    <div> <Tomato /> </div>
    <div> <Patty /> </div>
    <div> <Lettuce /> </div>
    <div className="bread-bottom"> </div>
    <div> <AddPatty /></div>    
    </div>
  );
}

export default App;