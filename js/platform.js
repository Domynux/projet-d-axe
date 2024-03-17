document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".platform-slider", {
        navigation : {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev"
        },
        pagination: {
        el : ".swiper-pagination",
        },
        autoplay : {
            delay : 3000
        }
    })
})

let ligth =document.querySelector('.light')
function switchMode(){

    let footercolor = document.querySelector('#footerP')
    let darkMode = document.querySelector('#darkMode')
    let lightMode = document.querySelector('#lightMode')
    let bodyColor = document.querySelector('#body')

    if(darkMode.classList.contains('display')){
        
        lightMode.classList.add('display')
        darkMode.classList.remove('display')
        bodyColor.classList.add('dark')
        bodyColor.classList.remove('light')
        footercolor.classList.add('darkFooter')
        footercolor.classList.remove('lightFooter')
        
       

    } else{ 
        lightMode.classList.remove('display')
        darkMode.classList.add('display')
        bodyColor.classList.remove('dark')
        bodyColor.classList.add('light')
        footercolor.classList.add('lightFooter')
        footercolor.classList.remove('darkFooter')
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