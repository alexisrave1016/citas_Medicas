const enviar = document.getElementById('enviar');
const registrarce = document.getElementById('Registrarse');
const contenidoTotal= document.getElementById('registroID');
const usuariosNuevos = [{
 
}]


const Login = ()=>{
    registrarce.addEventListener('click', ()=>{
        contenidoTotal.innerText= ' ';

        contenidoTotal.innerHTML= `
       
        <div class="formulario_registro">
    <form action="/my-handling-form-page" method="post">
    
        <ul>
         <li>
           <label for="name">Nombre Completo:</label>
           <input type="text" id="name" name="nombre_usuario">
         </li>
         <li>
           <label for="mail">Correo electrónico:</label>
           <input type="email" id="mail" name="user_mail">
         </li>
         <li>
           <label for="msg" type="number" id="cel">Telefono de contacto:</label>
           <input type="number" id="contacto" >
         </li>
         <li>
            <label for="name">Contraseña</label>
            <input type="password" id="contrasena" >
          </li>
          <li>
            <label for="mail">Verificacion de contraseña</label>
            <input type="password" id="contrasena_ver" >
          </li>
          <li>
            <label for="msg">Fecha de nacimiento:</label>
            <input type="date" id="fecha" name="fecha" class="form-control" autoComplete="off" />
          </li>
        </ul>
    </form>
    <button type="button" id="enviarDatos"> Enviar </button>
</div>
        `
        
    })
    // enviar.addEventListener('click', ()=>{
    //     console.log("esto es un ENVIO de prueba");
    // })
    document.getElementById('enviarDatos').addEventListener('click', () =>{
        console.log("boton funciona");
    })
}

Login();
