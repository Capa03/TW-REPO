
async function whether(city) {

    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+',pt&appid=36076a459d197d2328a7049f03e95d1d&units=metric';

    const tempResponse = await fetch(url);
    const tempResponseJson = await tempResponse.json();
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
            //error()
            window.alert("Error")
        }else {
            whether(myCity);
        }
    }

    function error(){


        const body = document.getElementById("body");

        const myModal =document.createElement("div");
        myModal.setAttribute("class","modal");
        myModal.id = "myModal";
        body.appendChild(myModal);

        let divModalDialog = document.createElement("div");
        divModalDialog.setAttribute("class","modal-dialog")
        body.appendChild(divModalDialog);

        let divClassModal = document.createElement("div");
        divClassModal.setAttribute("class","modal-content")
        divModalDialog.appendChild(divClassModal);

        //Header
        let divHeaderModal = document.createElement("div");
        divHeaderModal.setAttribute("class","modal-header");
        divClassModal.appendChild(divHeaderModal);

        let titelModal = document.createElement("h4");
        titelModal.setAttribute("class","modal-title");
        titelModal.textContent = "Error";
        divHeaderModal.appendChild(titelModal);

        //Modal Body
        let divBodyModal = document.createElement("div");
        divBodyModal.setAttribute("class","modal-body");
        divBodyModal.innerHTML = "Modal Body"
        divClassModal.appendChild(divBodyModal);


        //Modal footer
        let divModalFooter = document.createElement("div");
        divModalFooter.setAttribute("class","modal-footer");
        divClassModal.appendChild(divModalFooter);

        let buttonCloseModal = document.createElement("button");
        buttonCloseModal.setAttribute("class","btn btn-danger");
        buttonCloseModal.textContent = "Close";
        divModalFooter.appendChild(buttonCloseModal);

        $(document).ready(function(){
            $("#myButton").click(function(){
                $("#myModal").modal();
            });
        });
    }
    //table
    document.getElementById("table").style.display = "none";
