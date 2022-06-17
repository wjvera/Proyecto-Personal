const docu = document

export default function sortear(boton, selector){

    const obtenerGanador = (selector) =>{

        //devuelve un nodelist
        const player = docu.querySelectorAll(selector)

        //se guarda la posicion del ganador
        let random = Math.floor(Math.random()*player.length)

        let gana = player[random]

        return `el ganador es ${gana.textContent}`
    }

    docu.addEventListener('click', event =>{

        if (event.target.matches(boton)) {
            let result = obtenerGanador(selector)
            alert(result)
            //console.log(result)
        }
    })
}