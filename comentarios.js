const verificar = () => {
    let nombre= localStorage.getItem("nombre")
    if(nombre==" "){
        window.location.assign("index2.html")
    }else{
        window.location.assign("indexUsuario.html")
    }
}
const envio = () =>{
    window.alert("Comentario enviado");
    document.getElementById("mensaje").value = "";

}