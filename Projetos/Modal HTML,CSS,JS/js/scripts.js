const openModalbutton = document.querySelector("#open-modal");
const closeModalbutton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");


const toggleModal = () => {
    [modal,fade].forEach((el) => el.classList.toggle("hide"));
};


[openModalbutton,closeModalbutton,fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});