const  usuario = () => {
    let nombre= localStorage.getItem("nombre")
    console.log(nombre)
    document.getElementById("usuario").innerHTML=nombre; 

}
const cerrarS = () => {
   let usuario=" "
    localStorage.setItem("nombre",usuario)
    window.location.assign("index2.html")
}