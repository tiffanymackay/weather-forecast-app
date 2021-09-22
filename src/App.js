
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container-fluid box">
        <Search defaultCity="Seattle"/>
        <small className="footer">
          <a href="https://github.com/tiffanymackay/weather-forecast-app" target="_blank" rel="noreferrer">
            Open-source code  {" "}
            </a>
          by  {" "}
          <a href="https://www.linkedin.com/in/tiffanylmackay/" target="_blank" rel="noreferrer">
            Tiffany Mackay 
          </a>
        </small>
      </div>
      
    </div>
  );
}

export default App;
