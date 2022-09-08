let cardHeader = document.querySelector(".card_header");

let content = document.querySelector(".content");

let toggleContent = document.querySelector(".toggle-content")

cardHeader.addEventListener("click",()=>{
    
    content.classList.toggle("toggle-content");
})