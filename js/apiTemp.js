
async function whether(city) {

    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',pt&appid=36076a459d197d2328a7049f03e95d1d&units=metric'

    const tempResponse = await fetch(url);
    const tempResponseJson = await tempResponse.json();
    const tempo = tempResponseJson.main;
    const imgWeather = tempResponseJson.weather[0].main;
    console.log(tempResponseJson.weather[0].main);
    console.log(tempResponseJson.weather[0].description);

    console.log(tempo.temp)
    document.getElementById("result").innerHTML = tempo.temp + "ºc";
    document.getElementById("nameCity").innerHTML = "Em: " + tempResponseJson.name;
    document.getElementById("nameCountry").innerHTML = "Country: " + tempResponseJson.sys.country;


    if (imgWeather === "Clouds") {
        document.getElementById("imgWeather").src = "assets/img/temp/cloud.png"
    } else if (imgWeather === "Clear") {
        document.getElementById("imgWeather").src = "assets/img/temp/cloudy-day.png"
    } else if (imgWeather === "Rain") {
        document.getElementById("imgWeather").src = "assets/img/temp/rain.png"
    } else if (imgWeather === "Sun") {
        document.getElementById("imgWeather").src = "assets/img/temp/sun.png"
    }


}
    document.getElementById("myButton").onclick = function searchCity() {

        let myCity = document.getElementById("myCity").value;

        if (!myCity) {
        } else {
            whether(myCity)
        }
    }

