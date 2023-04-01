const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const button = document.querySelector('.btnlogin')
const iconclose = document.querySelector('.icon-close')

const btnMenu = document.querySelector('.menu')
const NavMenu = document.querySelector('.navigation')
const header = document.querySelector('header')



registerLink.addEventListener('click', () => {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
})

button.addEventListener('click', () => {
    wrapper.classList.add('active-poput')
})

iconclose.addEventListener('click', () => {
    wrapper.classList.remove('active-poput')
})

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('active')
    NavMenu.classList.toggle('active')
    header.classList.toggle('active')
})
