
//cuando el export es por default
import hamburguerMenu from "./hamburguesa.js";

// cuando no es por default 
import { digitalClock, alarm } from "./reloj.js";

import { atajos, moverBalon } from "./teclado.js";


const d = document

d.addEventListener('DOMContentLoaded', (event)=>{
    
    hamburguerMenu('.panel-btn', '.panel', '.panel a')

    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj')

    alarm('assets/estornudo.mp3', '#activar-alarma', '#desactivar-alarma')

    
})


// el teclado tiene 3 tipos de eventos
// keydown, keyup, keypres

//keydown = cuando presionamos la tecla
//keyup = cuando soltamos la tecla presionada
//keypress = cuando mantenemos presionada la tecla


//keydown esta asignado al document
d.addEventListener('keydown', event =>{
    atajos(event)
    moverBalon(event, '.ball', '.stage')
})