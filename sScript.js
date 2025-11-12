const navMenu = document.getElementById("nav-menu")
const btnMenu = document.getElementById("menu-button");
const links = document.getElementById("links-container")

btnMenu.addEventListener("click", ()=>{
    navMenu.classList.toggle("closed")
    atualizaNavbar()
})

function atualizaNavbar() { 
    if(!(navMenu.classList.contains("closed"))){
        links.style.display = "block"
    }else{
        links.style.display ="none"
    }

}
