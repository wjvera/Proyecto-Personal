
const docu = document

let x = 0 //iz - der
let y = 0 //arr - aba


export function moverBalon(event, pelota, area){

    const $pelota = docu.querySelector(pelota)
    const $area = docu.querySelector(area)


    console.log(event.keyCode)
    console.log(event.key)

    switch (event.keyCode) {

        case 37:
            event.preventDefault()
            x--
            break; //izquierda
        case 38:
            event.preventDefault()
            y--
            break; //arriba
        case 39:
            event.preventDefault()
            x++
            break; //derecha
        case 40:
            event.preventDefault()
            y++
            break; //abajo
    
        default:
            break;

        }

    $pelota.style.transform = `translate(${x*10}px, ${y*10}px)`
}



export function atajos (event) {
   /* console.log(event)
    console.log('el evento es de tipo -> ',event.type)
    console.log(`la tecla -> ${event.key} <- su keyCode es ${event.keyCode}`)
    console.log('tecla control esta en -> ', event.ctrlKey)
    console.log('tecla alt esta en -> ', event.altKey)
    console.log('tecla shift esta en -> ', event.shiftKey)

    if (event.key === 'a' && event.altKey) {
        alert('presionaste alt+a')
    }

    if (event.key === 'b' && event.altKey) {
        alert('presionaste alt+b')
    }

    if (event.key === 'c' && event.altKey) {
        alert('presionaste alt+c')
    }*/
}