const modals = document.querySelectorAll('.modal');

let activeModal = 0;
let passwordVisiblity = false;
let darkTheme = false;

function toggleModal(number){
    modals[activeModal].classList.remove('active-modal')
    modals[number].classList.add('active-modal')

    activeModal = number;
}

function togglePassword(){
    if(passwordVisiblity){
        document.getElementById('signup-password').type = 'password'
        document.getElementById('visibility-eye').src = "./icons/eye_off.svg"
    } else {
        document.getElementById('signup-password').type = 'text'
        document.getElementById('visibility-eye').src = "./icons/eye_on.svg"
    }
    passwordVisiblity = !passwordVisiblity;
}

function initialize(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme();
    }
}

function toggleTheme(){
    darkTheme = !darkTheme;
    if(darkTheme){
        document.querySelector(':root').style.setProperty('--text-color', 'white');
        document.querySelector(':root').style.setProperty('--background-1', '#1b2028');
        document.querySelector(':root').style.setProperty('--border-color', '#171a1f');
        document.querySelector(':root').style.setProperty('--icon-brightness', 1);
        document.getElementById('theme-toggler').src = "./icons/darkactive.svg"
    } else {
        document.querySelector(':root').style.setProperty('--text-color', 'black');
        document.querySelector(':root').style.setProperty('--background-1', '#ffffff');
        document.querySelector(':root').style.setProperty('--border-color', '#cccccc');
        document.querySelector(':root').style.setProperty('--icon-brightness', 0);
        document.getElementById('theme-toggler').src = "./icons/darkinactive.svg"
    }
}

initialize()