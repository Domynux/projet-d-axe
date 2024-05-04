let ligth = document.querySelector(".light");
function switchMode() {
  let footercolor = document.querySelector("#footerP");
  let darkMode = document.querySelector("#darkMode");
  let lightMode = document.querySelector("#lightMode");
  let bodyColor = document.querySelector("#body");

  if (darkMode.classList.contains("display")) {
    lightMode.classList.add("display");
    darkMode.classList.remove("display");
    bodyColor.classList.add("dark");
    bodyColor.classList.remove("light");
    footercolor.classList.add("darkFooter");
    footercolor.classList.remove("lightFooter");
  } else {
    lightMode.classList.remove("display");
    darkMode.classList.add("display");
    bodyColor.classList.remove("dark");
    bodyColor.classList.add("light");
    footercolor.classList.add("lightFooter");
    footercolor.classList.remove("darkFooter");
  }
}
/*-- tabs--*/

var sidenav = document.getElementById("tabs");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

/*--carte --*/

function fetchCharacter() {
  let url = window.location.search;
  let slug = new URLSearchParams(url).get("slug");
  return fetch("https://hp-api.lainocs.fr/characters/" + slug).then(
    (response) => response.json()
  );
}
let updateData = (_house) => {
  const data = {
    house: _house,
  };
  fetch("http://192.168.69.24:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  
    .then((response) => response.json())
    .then((data) => {
      console.log("Success", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

async function displayCharacter() {
  const data = await fetchCharacter();
  document.querySelector("#character").innerHTML = `
  <div class='character'>
  <h2 class =" texte "> ${data.name} </h2>
  <img src="${data.image}" alt="${data.name}">
  <p class='text' id='house'>${data.house}</p>
  <p class='text'>${data.actor}</p>
  <a class='text' href="liste_personnage.html">Back</a>
  </div>
  `;
  let element = document.getElementById("house");
  let colorBack = document.querySelector(".character");
  if (data.house == "Gryffindor") {
    colorBack.classList.add("gryffindor");
  } else if (data.house == "Slytherin") {
    colorBack.classList.add("slytherin");
  } else if (data.house == "Ravenclaw") {
    colorBack.classList.add("ravenclaw");
  } else if (data.house == "Hufflepuff") {
    colorBack.classList.add("hufflepuff");
  } else {
    colorBack.classList.add("noHouse");
  }
  updateData(data.house);
}

displayCharacter();
