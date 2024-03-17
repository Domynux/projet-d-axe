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
/* --- formulaire--- */

let form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    let email = document.querySelector('#email')

    if(email.value == '') {
        email.classList.remove('success')
        email.classList.add('invalide')
        console.log('Invalide !')
    } else {
        email.classList.remove('faux')
        email.classList.add('invalide')
        console.log('Valide !')
    }

    
    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')

    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')

    let pseudo = document.querySelector('#pseudo')

    if(pseudo.value == ''){

        errorContainer.classList.add('visible')
        pseudo.classList.remove('success')


        let err = document.createElement('li')
        pseudo.classList.add('invalide')
        err.innerText = "Le champ pseudo ne peut pas etre vide"

        errorList.appendChild(err)

    } else {

        if(pseudo.value.length < 6 ){
            errorContainer.classList.add('visible')
            pseudo.classList.remove('success')


            let err = document.createElement('li')
            pseudo.classList.add('invalide')
            err.innerText = "Le champ pseudo doit contenir au moins 6 lettres"

            errorList.appendChild(err)
        } else {
            pseudo.classList.add('success')
        }
        
    }
    
    /*-- Email--*/

    if(email.value == ''){

        errorContainer.classList.add('visible')
        email.classList.remove('success')


        let err = document.createElement('li')
        err.innerText = "Le champ email ne peut pas etre vide"

        errorList.appendChild(err)
    } else {
        email.classList.add('success')
    }
    
    /*------------------------------*/
    let password = document.querySelector('#password')
    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?])"
    )

    if(password.value == ''){

        errorContainer.classList.add('visible')
        password.classList.remove('success')


        let err = document.createElement('li')
        password.classList.add('invalide')
        err.innerText = "Le champ mot de passe ne peut pas etre vide"

        errorList.appendChild(err)
    } else {
        if(password.value.length < 10 || passCheck.test(password.value) == false){
            errorContainer.classList.add('visible')
            password.classList.remove('success')

            let err =document.createElement('li')
            password.classList.add('invalide')
            err.innerText = "Le mot de passe doit faire 10 caracteres minimumu, contenir minuscule, majuscule,chiffre, caractère spécial"

            errorList.appendChild(err)
        } else {
            password.classList.add('success')
        }
    }
    
    let password2 = document.querySelector('#password2')

    if(password2.value == ''){

        errorContainer.classList.add('visible')
        password2.classList.remove('success')


        let err = document.createElement('li')
        err.innerText = "Le champ validation du mot de passe ne peut pas etre vide"
        password2.classList.add('invalide')
        errorList.appendChild(err)
    } else {
        password2.classList.add('success')
    }

    let passwordInitial = document.querySelector('#password')
    let passwordReapeat = document.querySelector('#password2')

    if(passwordInitial.value != passwordReapeat.value){

        errorContainer.classList.add('visible')
        passwordReapeat.classList.remove('success')


        let err = document.createElement('li')
        passwordReapeat.classList.add('invalide')
        err.innerText = "Les mots de passes ne sont pas les meme"

        errorList.appendChild(err)

    } else {
        if (passwordReapeat.value == ''){
            passwordReapeat.classList.add('invalide')
        } else {
            passwordReapeat.classList.add('success')
        }
        
    } 
    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')

    if(
        pseudo.classList.contains('success') &&
        email.classList.contains('success') &&
        password.classList.contains('success') &&
        passwordReapeat.classList.contains('success')
    ){
        successContainer.classList.add('visible')
    }

    
})
