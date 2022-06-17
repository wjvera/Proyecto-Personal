const docu = document

export default function filtrarBusqueda(input, selector){

    docu.addEventListener('keyup', event=>{
        
        if (event.target.matches(input)) {
            //console.log('es el event.key ',event.key)
            //console.log('es el event.target.value: ',event.target.value)
            let valor = event.target.value


            //event.key accede al nombre de la tecla
                    // si es igual a tecla escape
                    // deja vacio el input
            if (event.key === "Escape") {
                event.target.value = ""
            }

            //selecciona todos los elemento de tipo .card
                              // recorre los nodos y se guarda
                                                  // en element
            docu.querySelectorAll(selector).forEach(element =>{
                //nodo          minuscula     si existe valor
                element.textContent.toLowerCase().includes(valor) 
                                ? element.classList.remove('filter')  
                                : element.classList.add('filter')
            })
        }
    })
}