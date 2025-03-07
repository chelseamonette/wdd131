// Footer dynamics
var d0 = new Date();
document.getElementById("year").innerHTML = d0.getFullYear();

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

function getProductName(){
products.forEach(product => {
    let productNameOption = document.createElement("option");
    productNameOption.setAttribute("value", product.name);
    productNameOption.textContent = product.name;
    document.querySelector(".name").appendChild(productNameOption);

});
}
getProductName();

document.addEventListener("DOMContentLoaded", () => {
  getNumberRev();
});

function getNumberRev() {
  let numRevs = localStorage.getItem("reviewCount");

  if (numRevs === null){
    numRevs = 0;
  }
  else {
    numRevs = parseInt(numRevs);
  }

  numRevs++;

  localStorage.setItem("reviewCount", numRevs);

  let thankYouMessage = document.createElement("p");
  thankYouMessage.textContent = "Thank you form submitting your review";
  document.body.appendChild(thankYouMessage);
}