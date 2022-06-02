

export default function hamburguerMenu (pnlBtn, panel){

    const d = document

    d.addEventListener('click', event =>{

        if (event.target.matches(pnlBtn) || event.target.matches(`${pnlBtn} *`)) {
            d.querySelector(panel).classList.toggle('is-active')
        }
    })
}