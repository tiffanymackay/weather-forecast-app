
import './App.css';
import Search from "./Search";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container-fluid box">
        <Search />
        <WeatherData />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
