import './App.css';
import logo from './Images/dumbbell-solid.svg'
import Excercise from './components/Excercise/Excercise';

function App() {
  return (
    <div className="App container my-5">
      <h1 className='fitness fw-bold'><img className='doumble-logo' src={logo} alt=""/> Fitness Club</h1>
      <h4>Select Today's Excercise</h4>
      <Excercise></Excercise>
    </div>
  );
}

export default App;
