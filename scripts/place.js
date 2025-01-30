// Footer dynamics
var d0 = new Date();
document.getElementById("year").innerHTML = d0.getFullYear();

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

function calculateWindChill(temperature, windSpeed){
    if(temperature <= 10 && windSpeed > 4.8){

        windChill = 13.12 + (0.6215 * temperature) - (11.37*(windSpeed**0.16)) + ((0.3965*temperature)*(windSpeed**0.16));
        return `${Math.round(windChill)} &deg;C`;
    }
    else{
        return "N/A";
    }
}

let temperature = parseFloat(document.querySelector("#temperature").textContent);
let windSpeed = parseFloat(document.querySelector("#windSpeed").textContent);

document.getElementById("windChill").innerHTML = calculateWindChill(temperature, windSpeed);
