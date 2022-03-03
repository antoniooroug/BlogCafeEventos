// Seleccionar elementos existen tres formas

// querySelector
const heading = document.querySelector('.header__texto h2') // retorna 0 o 1 elementos
heading.textContent = 'Este es el nuevo título del blog de Café';
console.log(heading);

//querySelectoAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nosotros Somos';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);

// Generando un nuevo enlace
const nuevoEnlace = document.createElement('A'); // Los elementos se ercriben con mayúsculas

// Agregar el href
nuevoEnlace.href = 'nuevo_enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';

// Agregar la clase 
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); // metodo appendChild nos hace agregar el nuevo elemento en la clase padre

console.log(nuevoEnlace);

// Eventos
console.log(1);

window.addEventListener('load', function() { // load espera a que el JS y todos los archivos dentro del HTML esten listos
    console.log(2);
});

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera CSS o imagenes, se recomienda usar este ya que usualmente no vamos a esperar a que se desacraguen las hojas de estilo, imagenes, etc, y este es mas rapido porque lo que si vamos a necesitar el HTML
    console.log(4);
});

/*window.onscroll = function(evento) {
    console.log(evento)
}*/

console.log(5);

// Seleccionar elementos y asociarles un evento
/*const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault(); // Este método se usa a la ahora de que al ejecutar un evento este no realice la acción que por default ejecuta, esto muy util para validar formularios
    console.log('Enviando formulario');
});*/



// Eventos en input y textarea
const datos = { // Utilizar esta sintaxis para validar fomularios
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento submit es utilizado en formularios
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; // Corta con la ejecución del código
    }
    // Enviar el formulario correctamente
    mostrarAlerta('El mensaje ha sido enviado correctamente');
    // console.log('Enviando Formulario ...')
});

function leerTexto(e) { //El evento se pasa automáticamente cuando se agrega addEventListener
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

// Mostrar mensaje de error o de aprobacion
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P'); // Creamos un párrafo
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('aprobado');
    }

    formulario.appendChild(alerta);

    // El mensaje desaparece después de 3 segundos
    setTimeout(() => {
        alerta.remove(); // Se remueve el error
    }, 3000);
}