import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity="New York"/>
         <p>This project was coded by <a href="https://github.com/minashahramyar/react-weather-app" target="_blank" rel="noreferrer">Mina</a> and is <a href="https://github.com/minashahramyar/react-weather-app" target='_blank' rel="noreferrer">open sourced on Github</a></p>
      </div>
    </div>
  );
}

export default App;
