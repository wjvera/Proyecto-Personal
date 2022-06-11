
const docu = document

export default function tester(idForm){

   //capturar todo el formulario
   //podemos acceder directamente a sus propiedades
   const $form = docu.getElementById(idForm)

   let test

   docu.addEventListener('submit', event=>{

       if (event.target === $form) {

           event.preventDefault()

           test = window.open($form.direccion.value, 
            'refe1', 
            `innerWidth=${$form.ancho.value}, 
            innerHeight=${$form.alto.value}`)
       }

   })


   docu.addEventListener('click', event =>{
       if (event.target === $form.botoncerr) {
          test.close()
       }
   })
}