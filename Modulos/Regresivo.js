
const docu = document

export default  function cuentaRegresiva(selector, limite, mensaje){

    const $selector = docu.querySelector(selector)

    //transformamos la fecha de string a tipo fecha en milisegundos
    const $fechaALlegar = new Date(limite).getTime() 

    let restaActual = setInterval(() => {
        
        let ahora = new Date().getTime() //obtener la hora actual en milisegundos

        let resta = $fechaALlegar-ahora //restamos la fecha a llegar con la actual

        const unaHora = 3600000
        const unDia = 24

        let dia = Math.floor(resta/(unDia*unaHora)), 
        horas = ('0'+Math.floor(resta % (unDia*unaHora)/(unaHora))).slice(-2), 
        minutos = ('0'+Math.floor(resta % (unaHora)/(1000 *60))).slice(-2), 
        segundos = ('0'+Math.floor(resta % (1000*60)/(1000))).slice(-2);


        $selector.innerHTML = `<h3>faltan: ${dia} dias / ${horas} horas / ${minutos} minutos ${segundos} segundos</h3>`

        if (resta < 0) {
            clearInterval(restaActual)
            $selector.innerHTML = `<h3>${mensaje}</h3>`
        }
        
    }, 1000);
}