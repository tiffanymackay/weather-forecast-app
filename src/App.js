
import './App.css';
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container-fluid box">
        <Search />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
