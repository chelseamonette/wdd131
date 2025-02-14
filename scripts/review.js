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