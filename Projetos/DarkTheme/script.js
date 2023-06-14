const chk = document.querySelector('#chk')
const h2 = document.querySelector('.h2')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    h2.classList.toggle('dark')
})