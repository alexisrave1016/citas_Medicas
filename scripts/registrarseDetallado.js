import Personas from './Personas.js'
const baseDatos= [];

const enviar_datos= document.getElementById('enviarDatos1').addEventListener('click',()=>{
    console.log("listo perro")
    
    
    
    let nombre = document.querySelector("input[id='name']").value;
    let correo = document.querySelector("input[id='mail']").value;
    let contrasena = document.querySelector("input[id='contrasena']").value;
    //let fechaN = document.querySelector("input[id='fecha']").value;

    const persona = new Personas(nombre,correo,contrasena)

    baseDatos.push(persona)
    console.log(baseDatos)
    localStorage.setItem('BaseDatos', JSON.stringify(baseDatos));
})

