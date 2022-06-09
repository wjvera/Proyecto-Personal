
//cuando el export es por default
import hamburguerMenu from "./Modulos/hamburguesa.js";

// cuando no es por default 
import { digitalClock, alarm } from "./Modulos/reloj.js";

import { atajos, moverBalon } from "./Modulos/teclado.js";

//cuando el export es por default
import cuentaRegresiva from './Modulos/Regresivo.js'
import subir from "./Modulos/ScrollArriba.js";
import temaObscuro from "./Modulos/obscuro.js";


const d = document

d.addEventListener('DOMContentLoaded', (event)=>{
    
    hamburguerMenu('.panel-btn', '.panel', '.panel a')

    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj')

    alarm('assets/estornudo.mp3', '#activar-alarma', '#desactivar-alarma')

    cuentaRegresiva('#countdown', 'July 03, 2022 15:53:00', '♫ Feliz cumpleaños ♫')

    subir('.scroll-top-btn')

    

})

temaObscuro('.dark-theme-btn', 'dark-mode')


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