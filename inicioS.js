listaU=JSON.parse(localStorage.getItem("listaUsuarios"))
const getDatos = () => {
    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("pass").value;
    let texto; 
    texto = "Usuario o contraseña incorrecta"; 
    console.log(listaU)
    
    for (let i=0;i<listaU.length;i++){
        if ( listaU[i].user==usuario&&listaU[i].contra == contrasenia){
            localStorage.setItem("nombre",usuario)
            texto = "Perfil existente";
            console.log(listaU[0].user)
            i = 5; 
            window.location.assign("indexUsuario.html")
            
        }  
    }
     document.getElementById("validacion").innerHTML=texto; 
        
}