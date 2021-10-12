const modals = document.querySelectorAll('.modal');

let activeModal = 0;
let passwordVisiblity = false;

function toggleModal(number){
    modals[activeModal].classList.remove('active-modal')
    modals[number].classList.add('active-modal')
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