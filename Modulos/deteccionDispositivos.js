const d = document, n= navigator, ua = n.userAgent

export default function detectar(id){

    const $id = d.getElementById(id)

    const movil = {
        android: ()=> ua.match(/android/i),
        ios: ()=> ua.match(/iphone|ipad|ipod/i),
        windows: ()=> ua.match(/windows phone/i),
        devolver: function(){
            return this.android() || this.ios() || this.windows()
        }
    }



    const escritorio = {
        linux: ()=> ua.match(/linux/i),
        mac: ()=> ua.match(/mac os/i),
        windows: ()=> ua.match(/windows nt/i),
        devolver: function(){
            return this.linux() || this.mac() || this.windows()
        }
    }


    const navegador = {
        chrome: ()=> ua.match(/chrome/i),
        safari: ()=> ua.match(/safari/i),
        firefox: ()=> ua.match(/firefox/i),
        opera: ()=> ua.match(/opera|opera mini/i),
        ie: ()=> ua.match(/msie|iemobile/i),
        edge: ()=> ua.match(/edge/i),
        devolver: function(){
            return (
                this.chrome() ||
                this.edge() ||
                this.safari() ||
                this.firefox() ||
                this.opera() ||
                this.ie()
            )
        }
    }



    /*console.log(movil.devolver())
    console.log(escritorio.devolver())
    console.log(navegador.devolver())*/

    $id.innerHTML = `

        <ul>
            <li>User Agent <b>${ua}</b></li>
            <li>SO: <b> ${movil.devolver() ? movil.devolver() : escritorio.devolver()}</b></li>
            <li>Navegador: <b> ${navegador.devolver()}</b></li>
        </ul>
    `
 
}