const passwordEl = document.querySelector('#password')
const confirmPasswordEl = document.querySelector('#confirm-password')
const wrongPasswordEl = document.querySelector('.wrong-password')

function validatePassword() {

    if(passwordEl.value != confirmPasswordEl.value) {
        passwordEl.classList.add("error");
        confirmPasswordEl.classList.add("error");
        wrongPasswordEl.hidden = false;
    } else {
        passwordEl.classList.remove("error");
        confirmPasswordEl.classList.remove("error");
        wrongPasswordEl.hidden = true;
    }
}