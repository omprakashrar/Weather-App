const apikey = "3ec30f86f93d75957a3c82d8c6fc16db";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city){

    const reponse = await fetch(apiurl + city +  `&appid=${apikey}`);


    if(reponse.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await reponse.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weathericon.src = "img/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weathericon.src = "img/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "img/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "img/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weathericon.src = "img/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        
        
    }
    var data = await reponse.json();

    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "img/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "img/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "img/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    
}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value)
})

checkweather(city);