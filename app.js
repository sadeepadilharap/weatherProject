const { log } = require("console");
const express =  require("express");
const https = require("https");

const app = express();

app.get("/", function(req,res){


    const url ="https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=465bc8318d500a53b0b93e10d74ca723";
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData=JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            console.log(weatherDescription);
        
        })
    })
    res.send("Server is up and running");
})






app.listen(3000,function(){
    console.log("Server is running on port 3000.");
})