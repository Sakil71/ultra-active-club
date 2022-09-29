import './App.css';
import Excercise from './components/Excercise/Excercise';

function App() {
  return (
    <div className="App container my-5">
      <h1 className='fw-semibold text-primary'>Fitness Club</h1>
      <h4>Select Todays Excercise</h4>
      <Excercise></Excercise>
    </div>
  );
}

export default App;
