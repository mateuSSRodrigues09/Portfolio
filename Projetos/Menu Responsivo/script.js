const chk = document.getElementById('chk')
const h1 = document.querySelector('h1')
const link = document.querySelectorAll('.link')



chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    h1.classList.toggle('dark')
    link.forEach(x => x.classList.toggle('dark'))
    
})