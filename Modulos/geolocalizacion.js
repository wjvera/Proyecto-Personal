const docu = document
const nav = navigator

export default function geoLocalizar(id){

    const $id = docu.getElementById(id)

    const opciones = {
        enableHighAccuracy: true, // localizacion precisa
        timeout: 5000, // tiempo de respuesta de lectura
        maximumAge: 0// no se guarde la lectura anterior
    }

    const exito = (posicion) =>{
        let coords = posicion.coords
        console.log(posicion)

        $id.innerHTML = `
        <p>Posicion Actual</p>
        <ul>
            <li>Latitud: ${coords.latitude}</li>
            <li>Longiud: ${coords.longitude}</li>
            <li>Precision: ${coords.accuracy} metros</li>
        </ul>
        <a href='https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z' target="_blank" rel="noopener">Visitar en google maps</a>
        `

    }

    const error = (err) =>{
        $id.innerHTML = `<p><mark>error ${err.code}: ${err.message}</mark></p>`
        console.log(`error ${err.code}: ${err.message}`)
    }

    nav.geolocation.getCurrentPosition(exito, error, opciones)
}