
//cuando el export es por default
import hamburguerMenu from "./hamburguesa.js";

// cuando no es por default 
import { digitalClock, alarm } from "./reloj.js";


const d = document

d.addEventListener('DOMContentLoaded', (event)=>{
    
    hamburguerMenu('.panel-btn', '.panel', '.panel a')

    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj')

    alarm('assets/estornudo.mp3', '#activar-alarma', '#desactivar-alarma')
})