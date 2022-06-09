const d = document

const ls = localStorage

export default function temaObscuro(boton, classDark){

    //aqui guarda el boton
    const $botonTema = d.querySelector(boton)

    //aqui guarda el html y body principal
    const htmlBody = d.querySelectorAll('[data-dark]')
    //console.log(htmlBody)
    

    let sol = "🌞"
    let luna = "🌙"


    const modoClaro = () =>{
        htmlBody.forEach(element => (
            element.classList.remove(classDark)
        ))
        $botonTema.textContent = luna

        //para que se almacene el ultimo cambio en lStorage
        ls.setItem('tema', 'claro')
    }


    const modoObscuro = () =>{
        htmlBody.forEach(element => (
            element.classList.add(classDark)
        ))
        $botonTema.textContent = sol

        ls.setItem('tema', 'oscuro')
    }


    //aplicamos el evento al boton

    d.addEventListener('click', (event) =>{

        if (event.target.matches(boton)) {
            
            if($botonTema.textContent === luna) {
                modoObscuro()
            } else {
                modoClaro()
            }
        } 
    })


    // --------------- LocalSorage ------------------


    //getItem .... obtener la variable en el local Storage
    //setItem .... modificar o crear una variable en el lS



    d.addEventListener('DOMContentLoaded', event =>{

        //si en el localStorage esta la variable tema o si esta vacia
        if (ls.getItem('tema') === null) ls.setItem('tema', 'claro') 

        if (ls.getItem('tema') === 'claro') modoClaro()
        if (ls.getItem('tema') === 'oscuro') modoObscuro()
        
    })
    
}