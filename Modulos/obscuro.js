const d = document

export default function temaObscuro(boton, classDark){

    //aqui guarda el boton
    const $botonTema = d.querySelector(boton)

    //aqui guarda el html y body principal
    const htmlBody = d.querySelectorAll('[data-dark]')
    console.log(htmlBody)
    

    let sol = "🌞"
    let luna = "🌙"

    //aplicamos el evento al boton

    d.addEventListener('click', (event) =>{

        if (event.target.matches(boton)) {

            console.log($botonTema.textContent)
            
            if ($botonTema.textContent === luna) {
                
                //ahora vamos a aplicarle el color obscuro recorriendo sus nodos
                htmlBody.forEach(element => {
                    element.classList.add(classDark)
                })
                $botonTema.textContent = sol
            } else {
                htmlBody.forEach(element => {
                    element.classList.remove(classDark)
                })
                $botonTema.textContent = luna
            }
        }
    })
}