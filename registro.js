

const registro = () => {
    listaU=JSON.parse(localStorage.getItem("listaUsuarios"))
    let usuario = document.getElementById("nombre").value;
    let contrasenia = document.getElementById("password").value;
    let contraConfirm= document.getElementById("passwordConfirm").value; 
    let texto2; 
    texto = "registro no exitoso"; 
    texto2 = "Las contraseñas no son iguales";
        if ( usuario!="" && contrasenia !="" && contrasenia==contraConfirm){
            listaU.push({user: usuario, contra: contrasenia} );
            texto2="Datos correctos"
            texto = "registro  exitoso";
            localStorage.setItem("nombre",usuario)
            window.location.assign("indexUsuario.html")
    } 
       
    console.log(listaU)
    document.getElementById("validacion").innerHTML=texto2;
    localStorage.setItem("listaUsuarios",JSON.stringify(listaU)) 
}
