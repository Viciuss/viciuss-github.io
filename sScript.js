const navMenu = document.getElementById("nav-menu")
const btnMenu = document.getElementById("menu-button");
const links = document.getElementById("links-container")

btnMenu.addEventListener("click", ()=>{
    navMenu.classList.toggle("closed")
    atualizaNavbar()
})

console.log("teste")


function atualizaNavbar() { 
    if(!(navMenu.classList.contains("closed"))){
        links.style.display = "block"
    }else{
        links.style.display ="none"
    }

}


const meuEmail = document.getElementById("email")

meuEmail.addEventListener("click", ()=>{
    navigator.clipboard.writeText(meuEmail.innerHTML)
    alert("Email copiado com sucesso!")
})