const wrapper = document.querySelector(".wrapper"),
inputPart = wrapper.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input"),
locationBtn = inputPart.querySelector("button");
weatherPart = wrapper.querySelector(".weather-part"),
wIcon = weatherPart.querySelector("img"),
arrowBack = wrapper.querySelector("header i");

let apiKey = "ed5b51f9b7ca46d07d0eac1110a1776c";

inputField.addEventListener("keyup", e =>{
    // if user pressed enter btn and input valie if not empty
    if(e.key == "Enter" && inputField.value.trim() !== ""){
        requestAPI(inputField.value);
    }
});

locationBtn.addEventListener("click", () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        alert("Your browser not suppor geolocaton api");
    }
});

function requestAPI(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetchData()
}

function onSuccess(position){
    const {latitude, longitude} = position.coords; // getting lat and long of the user device from coords obj
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
    fetchData()
}

function onError(error){
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error");
}

function fetchData(){
    infoTxt.innerText = "Getting Weather details...";
    infoTxt.classList.add("pending");
    // getting api response and returning it with parsing into js obj and in another
    // then function calling weatherDetailsfunction with passing api result as an argument
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
        infoTxt.innerText = "Something went wrong";
        infoTxt.classList.replace("pending", "error");
    });
}

function weatherDetails(info){
    if(info.cod == "404"){
        infoTxt.classList.replace("pending", "error");
        infoTxt.innerText = `${inputField.value} isn't a valid city name`
    } else if(info.sys && info.sys.country){
        // let's get required properties value from the info object
        const city = info.name;
        const country = info.sys.country;
        const {description, id} = info.weather[0];
        const {temp, feels_like, humidity} = info.main;

        if(id == 800){
            wIcon.src = "WeatherIcons/clear.svg";
        }else if(id >= 200 && id <= 232){
            wIcon.src = "WeatherIcons/storm.svg";
        }else if(id >= 600 && id <= 622){
            wIcon.src = "WeatherIcons/snow.svg";
        }else if(id >= 701 && id <= 781){
            wIcon.src = "WeatherIcons/haze.svg";
        }else if(id >= 801 && id <= 804){
            wIcon.src = "WeatherIcons/cloud.svg";
        }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
            wIcon.src = "WeatherIcons/rain.svg";
        }

        // let's pass these values to a particular html element
        weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
        weatherPart.querySelector(".weather").innerText = description;
        weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
        weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
        weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;

        infoTxt.classList.remove("pending", "error");
        infoTxt.innerText = "";
        inputField.value = "";
        wrapper.classList.add("active")
    } else {
        infoTxt.innerHTML = "Weather data not available for this location.";
    }
}

arrowBack.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
})