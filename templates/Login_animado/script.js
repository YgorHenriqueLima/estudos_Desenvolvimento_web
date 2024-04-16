const container = Document.querySelector(".container")
const SignupButton = document.querySelector('.signup-section header')
const LoginButton = document.querySelector('.signup-section header')

LoginButton.addEventListener('click', ()=>{
    container.classList.add('active')
})

SignupButton.addEventListener('click', ()=>{
    container.classList.add('active')
})