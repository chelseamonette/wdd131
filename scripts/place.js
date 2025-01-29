// Footer dynamics
var d0 = new Date();
document.getElementById("year").innerHTML = d0.getFullYear();

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

function calculateWindChill(temperature, windSpeed){

    return 35.74 + (0.6215 * temperature) - (35.75*(windSpeed**0.16)) + ((0.4275*temperature)*(windSpeed**0.16));
}