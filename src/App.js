import './App.css';
import BreadBottom from './components/BreadBottom';
import Fruit from './components/Fruit';
import Patty from './components/Patty';
import Vegetable from './components/Vegetable';
import BreadTop from './components/BreadTop';

function App() {
  return (
    <div className="App">
     <h1> Regular Burger</h1>
    <div className="bread-top"> <BreadTop /> </div>
    <div className="fruit"> <Fruit /> </div>
    <div className="patty"> <Patty /> </div>
    <div className="vegetable"> <Vegetable /> </div>
    <div className="bread-bottom"> <BreadBottom /> </div>
    </div>
  );
}

export default App;