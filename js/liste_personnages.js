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

/*-- carte --*/

function fetchCharacters() {
  return fetch("https://hp-api.lainocs.fr/characters").then((response) =>
    response.json()
  );
}

async function displayCharacters() {
  const data = await fetchCharacters();
  data.forEach((character) => {
    document.querySelector("#characters").innerHTML += `
      <div class='character' id="perso">
         <a href="personnage.html?slug=${character.slug}">
           <div class =" text">
             <h3>${character.name}</h3>
             <img class="image" src="${character.image}" alt="${character.name}">
             <p class='text' id='house'>${character.house}</p>
           </div>
         </a>
      
      `;
    let element = document.getElementById("house");
    let colorBack = document.querySelector(".character");

    if (characters.house == "Gryffindor") {
      colorBack.classList.add("gryffindor");
    } else if (characters.house == "Slytherin") {
      colorBack.classList.add("slytherin");
    } else if (characters.house == "Ravenclaw") {
      colorBack.classList.add("ravenclaw");
    } else if (characters.house == "Hufflepuff") {
      colorBack.classList.add("hufflepuff");
    }
  });
}
displayCharacters();
