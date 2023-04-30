// adicionar classe hovered no item de lista selecionado

let list = document.querySelectorAll('.navigation li')
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('hovered'))
    this.classList.add('hovered')
}
list.forEach((item) => 
item.addEventListener('click', activeLink))


//menuToggle

let toggle = document.querySelector('.toggle')
let navigation = document.querySelector('.navigation')
let main = document.querySelector('.main')

toggle.onclick = function(){
     navigation.classList.toggle('active')
     main.classList.toggle('active')
}

