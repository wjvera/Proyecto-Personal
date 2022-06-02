

import hamburguerMenu from "./hamburguesa.js";

const d = document

d.addEventListener('DOMContentLoaded', (event)=>{
    hamburguerMenu('.panel-btn', '.panel', '.panel a')
})