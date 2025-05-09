// const weatherData = require("../Models/Weather_schema");

const fetchWeatherData = async (req, res) => {
  const { city } = req.params;
  const apiKey = process.env.WEATHER_API_KEY;

  try {
        // console.log("Requested City:", city);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const data = await response.json();
  // console.log("response nj",response)
    if (response.status === 200) {
      const requiredData = {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
      };
//       console.log("start")
//       await weatherData.create(requiredData);
// console.log("end")
      res.status(200).json({ requiredData });
    } else {
      res.status(404).json({ msg: "City not found" });
    }
  } catch (error) {
    console.log("error section here",error)
    res.status(500).json({ msg: "error data fetching" });
  }
};

module.exports = { fetchWeatherData };
