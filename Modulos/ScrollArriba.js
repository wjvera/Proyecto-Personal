
const d = document
const w = window


export default function subir(boton){

    const $boton = d.querySelector(boton)

    w.addEventListener('scroll', event =>{

        //obtenemos los valores del alto del scroll
        let medirScroll = w.pageYOffset || d.documentElement.scrollTop
       // console.log(medirScroll)
        

        //mientras sea menor de 600 no muestres el boton
        if(medirScroll > 600){
            $boton.classList.remove('hidden') // le quitamos el hidden para que aparezca
        }else{
            $boton.classList.add('hidden')
        }
    })

    d.addEventListener('click', event =>{

        if (event.target.matches(boton)) {
            w.scrollTo({
                behavior: 'smooth', // hacer suave la subida
                top: 0 // ir al inicio
            })
        }
    })
}