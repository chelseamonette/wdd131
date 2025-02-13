// Footer dynamics
var d0 = new Date();
document.getElementById("year").innerHTML = d0.getFullYear();

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Reno Nevada",
        location: "Reno, Nevada",
        dedicated: "2000, April, 23",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/reno-nevada-temple/reno-nevada-temple-47107.jpg"
    },
    {
        templeName: "Sacramento California",
        location: "Sacramento, California",
        dedicated: "2006, September, 3",
        area: 19500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/sacramento-california-temple/sacramento-california-temple-11317.jpg"
    },
    {
        templeName: "Red Cliffs Utah",
        location: "St. George, Utah",
        dedicated: "2024, March, 24",
        area: 96277,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/red-cliffs-utah-temple/red-cliffs-utah-temple-44639.jpg"
    }
];

const oldLink = document.querySelector("#old");

oldLink.addEventListener("click", () => {
  const oldYear = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) < 1900);
  createTempleCard(oldYear);
});

const newLink = document.querySelector("#new");

newLink.addEventListener("click", () => {
  const newYear = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) > 2000);
  createTempleCard(newYear);
});

const largeLink = document.querySelector("#large");

largeLink.addEventListener("click", () => {
  const large = temples.filter((temple) => temple.area > 90000);
  createTempleCard(large);
});

const smallLink = document.querySelector("#small");

smallLink.addEventListener("click", () => {
  const small = temples.filter((temple) => temple.area < 10000);
  createTempleCard(small);
});

const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
  createTempleCard(temples);
});

function createTempleCard(filteredTemples){
  document.querySelector(".temples").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");

    let name = document.createElement("h2");
    name.textContent = temple.templeName;

    let location = document.createElement("p");
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

    let dedicated = document.createElement("p");
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

    let area = document.createElement("p");
    area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;

    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".temples").appendChild(card);
  });
}

createTempleCard(temples);