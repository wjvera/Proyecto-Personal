
//cuando el export es por default
import hamburguerMenu from "./Modulos/hamburguesa.js";

// cuando no es por default 
import { digitalClock, alarm } from "./Modulos/reloj.js";

import { atajos, moverBalon } from "./Modulos/teclado.js";

//cuando el export es por default
import cuentaRegresiva from './Modulos/Regresivo.js'
import subir from "./Modulos/ScrollArriba.js";
import temaObscuro from "./Modulos/obscuro.js";
import responsiveMedia from "./Modulos/objetosResponsive.js";
import tester from "./Modulos/responsiveTester.js";
import detectar from "./Modulos/deteccionDispositivos.js";
import detectarInt from "./Modulos/detectarInternet.js";
import geoLocalizar from "./Modulos/geolocalizacion.js";


const d = document

d.addEventListener('DOMContentLoaded', (event)=>{
    
    hamburguerMenu('.panel-btn', '.panel', '.panel a')

    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj')

    alarm('assets/estornudo.mp3', '#activar-alarma', '#desactivar-alarma')

    cuentaRegresiva('#countdown', 'July 03, 2022 15:53:00', '♫ Feliz cumpleaños ♫')

    subir('.scroll-top-btn')
                                                                                            // < 700                                                                              > 700
    responsiveMedia('youtube', '(min-width: 700px)', `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=94" target='_blank' rel="noopener">Ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    responsiveMedia('mapa', '(min-width: 700px)', `<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63815.42488177145!2d-78.02456551643712!3d-1.4928810999999866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d3e0a0cec83d13%3A0x106de38489136d76!2sPuyo!5e0!3m2!1ses-419!2sec!4v1654891739577!5m2!1ses-419!2sec" target='_blank' rel="noopener">Ver mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63815.42488177145!2d-78.02456551643712!3d-1.4928810999999866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d3e0a0cec83d13%3A0x106de38489136d76!2sPuyo!5e0!3m2!1ses-419!2sec!4v1654891739577!5m2!1ses-419!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)

    tester('responsive-tester')
    detectar('info-device')

    geoLocalizar('geoloca')
})


temaObscuro('.dark-theme-btn', 'dark-mode')


//no necesita parametros
detectarInt()





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