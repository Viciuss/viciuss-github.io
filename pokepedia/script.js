const range = document.getElementById("num")
const valor = document.getElementById("valor")

range.addEventListener("input", function(){
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
    var str = this.value.replace(/[^0-9]/g, "").slice(0, 11);
    
    let result =str.replace(regex, "($1)$2-$3")
    valor.textContent = result
})