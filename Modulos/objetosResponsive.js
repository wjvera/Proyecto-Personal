
const d = document, w = window

export default function responsiveMedia(id, media, mobileContent, compuD){
    
    //metodo que recibe una condicion mediaquery
    let breakpoint = w.matchMedia(media)
    //nos devuelve un objeto mediaQueryList


    const responsivo = (event) =>{

        if (event.matches) {
            d.getElementById(id).innerHTML = compuD
        }else{
            d.getElementById(id).innerHTML = mobileContent
        }

        //console.log('MediaQuery', breakpoint, event.matches)
    }

    //en el breakpoint tenemos el objeto mediaQueryList
    //de ahi le agregamos un listener
    breakpoint.addListener(responsivo)

    responsivo(breakpoint)
}