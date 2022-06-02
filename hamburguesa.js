

export default function hamburguerMenu (pnlBtn, panel, quitar){

    const d = document

    d.addEventListener('click', event =>{

        console.log(event.target)

        if (event.target.matches(pnlBtn) || event.target.matches(`${pnlBtn} *`)) {
            d.querySelector(panel).classList.toggle('is-active')
            d.querySelector(pnlBtn).classList.toggle('is-active')
        }

        if (event.target.matches(quitar)) {
            d.querySelector(panel).classList.remove('is-active')
            d.querySelector(pnlBtn).classList.remove('is-active')
        }
    })
}