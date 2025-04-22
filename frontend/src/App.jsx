import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [errorCity, setErrorCity] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) {
      return setErrorCity("Please Enter a City!");
    }
    try {
      const res = await axios.get(`http://localhost:5000/api/weather/${city}`);

      if (res.status === 200) {
        setWeather(res.data.requiredData);
        setErrorCity("");
      }
    } catch (err) {
      // console.log(err);
      setErrorCity(err.response.data.msg || "error occured");
    }
  };

  return (
    <div className="App">
      <h2>Weather App</h2>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && !errorCity ? (
        <div>
          <h2>🌤️ Weather in {weather.city}</h2>
          <p>🌡️ Temperature: {weather.temperature}°C</p>
          <p>📝 Condition: {weather.description}</p>
        </div>
      ) : (
        <div className="no-city-found-div">
          <h6>{errorCity}</h6>
        </div>
      )}
    </div>
  );
}

export default App;
