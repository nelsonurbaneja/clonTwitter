const container = document.getElementById('container')
const boton = document.getElementById('boton')
const pluma = document.getElementById('pluma')
const containerInput = document.getElementById('containerInput')
const inputT = document.getElementById('inputT')
const inputHome = document.getElementById('inputHome')

const comprobarWidth = ()  => {
    if(window.innerWidth >= 981) {
        container.classList.remove('menu')
        boton.classList.remove('ocultar')
        pluma.classList.add('ocultar')
    }else {
        container.classList.add('menu')
        boton.classList.add('ocultar')
        pluma.classList.remove('ocultar')
    }
} 

comprobarWidth()

window.addEventListener('resize', e=> {
    comprobarWidth()
})

// inputT.addEventListener('focus', e => {
//     containerInput.classList.add('blanco')
// }) 