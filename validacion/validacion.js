const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkImputs();
});

function checkImputs(){
    const nombreValue = nombre.value.trim();
    const telefonoValue = telefono.value.trim();
    const emailValue = email.value.trim();
    const mensajeValue = mensaje.value.trim();

    if(nombreValue === ''){
        campoInvalido(nombre, 'No puede dejar este campo vacio.');
    }else{
        campoValido(nombre);
    }

    if(telefonoValue === ''){
        campoInvalido(telefono, 'No puede dejar este campo vacio.');
    }else{
        campoValido(telefono);
    }

    if(emailValue === ''){
        campoInvalido(email,'No puede dejar este campo vacio.');
    }else if(!esEmail(emailValue)){
        campoInvalido(email,'Debe ingresar un email válido.');
    }else{
        campoValido(email);
    }

    if(mensajeValue === ''){
        campoInvalido(mensaje, 'Ingrese su mensaje por favor.');
    }else{
        campoValido(mensaje);
    }
}

function campoInvalido(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
 
function campoValido(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function esEmail(email){
    return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);
}