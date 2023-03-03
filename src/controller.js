//import dependency packages
const axios = require("axios");
const xml2js = require("xml2js");

require("dotenv").config();
const API_KEY = process.env.API_KEY;
//handler function that gets a city's data
exports.getCityData = async (req, res) => {
  const city = req.params.city;

  //use regex to ensure city contain only words
  if(!(/[A-Za-z\s,]/.test(city))){
    return res.status(403).json({message: 'city must be a name'})
  }
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    });

    //convert response object to xml
    const builder = new xml2js.Builder();
    const cityData = builder.buildObject(response.data);

    return res.set("content-type", "text/xml").status(200).send(cityData);
  } catch (err) {
    res.set("content-type", "application/json").status(404).json({
      status: "fail",
      message: err.message,
      
    });
  }
};
