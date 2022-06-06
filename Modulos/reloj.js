
const d = document


export function digitalClock(re, btnStart, btnStop) {
    
    let guardarHora 

    d.addEventListener('click', event =>{

        //iniciar reloj
        if (event.target.matches(btnStart)) {

            guardarHora = setInterval(() => {
                let hora = new Date().toLocaleTimeString()
                d.querySelector(re).innerHTML = `<h3>${hora}</h3>`
            }, 1000);

            //deshabilitamos el boton
            event.target.disabled = true
        }


        // detener reloj

        if (event.target.matches(btnStop)) {
            clearInterval(guardarHora) // detener el reloj
            d.querySelector(re).innerHTML = null //desaparecer el selector
            d.querySelector(btnStart).disabled = false //volvemos a activar el boto

        }
    })
}


export function alarm(sonido, alarmStart, alarmStop) {

    let alarm
    
    const $audio = d.createElement('audio') //creamos un elemento de tipo audio

    //el sonido que le pasamos por parametros se guardara en la propiedad source de audio
    $audio.src = sonido

    d.addEventListener('click', event =>{

        // iniciar alarma
        if (event.target.matches(alarmStart)) {
            alarm = setTimeout(() => {
                $audio.play()
            }, 2000);

            //deshabilitamos el boton
            event.target.disabled = true
        }



        // detener alarma
        if (event.target.matches(alarmStop)) {
            clearTimeout(alarm) //limpiamos el Timeout
            alarm.currentTime = 0 //reiniciamos el sonido
            d.querySelector(alarmStart).disabled = false //volvemos a activar el boton
        }
    })
}