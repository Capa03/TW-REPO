
var myModalOnEmptyInput = new bootstrap.Modal(document.getElementById('myModalEmpty'))
var myModalOnInvalidInput = new bootstrap.Modal(document.getElementById('myModalInvalid'))
async function whether(city) {

    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+',pt&appid=36076a459d197d2328a7049f03e95d1d&units=metric';
    let tempResponse;
    let tempResponseJson;

        tempResponse = await fetch(url);
        tempResponseJson = await tempResponse.json();

        if(tempResponseJson.cod === "404") {
            myModalOnInvalidInput.show();
            return;
        }
            const tempo = tempResponseJson.main;
            const imgWeather = tempResponseJson.weather[0].main;


    let nameCity = tempResponseJson.name;
    
    
        document.getElementById("result").innerHTML = tempo.temp+"ºc";
        document.getElementById("nameCity").innerHTML = nameCity.substring(0,10);
        document.getElementById("nameCountry").innerHTML = tempResponseJson.sys.country;
        document.getElementById("humidity").innerHTML = "Humidity:"+tempo.humidity+"%";
        document.getElementById("table").style.display = "block";
        
        
        if (imgWeather === "Clouds") {
            document.getElementById("imgWeather").src = "assets/img/temp/cloud.png";
        } else if (imgWeather === "Clear") {
            document.getElementById("imgWeather").src = "assets/img/temp/cloudy-day.png";
        } else if (imgWeather === "Rain") {
            document.getElementById("imgWeather").src = "assets/img/temp/rain.png";
        } else if (imgWeather === "Sun") {
            document.getElementById("imgWeather").src = "assets/img/temp/sun.png";
        }
}

    document.getElementById("myButton").onclick = function searchCity() {
        
        let myCity = document.getElementById("myCity").value;


        if(myCity === ""){
            error()
        }else {
            whether(myCity);
        }
    }

    function error(){
        myModalOnEmptyInput.show();
    }



    //table
    document.getElementById("table").style.display = "none";
