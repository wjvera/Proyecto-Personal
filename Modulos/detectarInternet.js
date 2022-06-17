const d = document
const n = navigator
const w = window

export default function detectarInt(){


    const enLinea = () =>{

        const $nuevoElemento = d.createElement('div')

        if (n.onLine) {
            $nuevoElemento.textContent = 'Conexion establecida'
            $nuevoElemento.classList.add('online')
            $nuevoElemento.classList.remove('offline')
        }else{
            $nuevoElemento.textContent = 'No hay conexion'
            $nuevoElemento.classList.add('offline')
            $nuevoElemento.classList.remove('online')
        }

        //agregar nuevoElement al body
        d.body.insertAdjacentElement('afterbegin', $nuevoElemento)

        //quitar el mensaje despues de que haya conexion
        setTimeout(() => {
            d.body.removeChild($nuevoElemento)
        }, 2000);
    }

    //detectar cuando esta conectado
    w.addEventListener('online', event =>{
        enLinea()
    })

    //detectar cuando esta desconectado
    w.addEventListener('offline', event =>{
        enLinea()
    })
}