const formNombre = document.getElementById('form-nombre')
const contFormNombre = document.querySelector('.form-nombre')
const errNombre = document.getElementById('error-nombre')

const formPregUno = document.getElementById('form-preg-uno') 
const contPregUno = document.getElementById('preg-uno')

const formPregDos = document.getElementById('form-preg-dos') 
const contPregDos = document.getElementById('preg-dos')

const formPregTres = document.getElementById('form-preg-tres') 
const contPregTres = document.getElementById('preg-tres')

const formPregCuatro = document.getElementById('form-preg-cuatro') 
const contPregCuatro = document.getElementById('preg-cuatro')

const formPregCinco = document.getElementById('form-preg-cinco') 
const contPregCinco = document.getElementById('preg-cinco')

const formPregSeis = document.getElementById('form-preg-seis') 
const contPregSeis = document.getElementById('preg-seis')

const formPregSiete = document.getElementById('form-preg-siete') 
const contPregSiete = document.getElementById('preg-siete')

const respuestaFinal = document.getElementById('respuesta-final')

let nombre, respuestaUno, respuestaDos, respuestaTres, respuestaCuatro, respuestaCinco, respuestaSeis, respuestaSiete

formNombre.addEventListener('submit', (e) => {
    e.preventDefault()

    const datos = new FormData(formNombre)
    nombre = datos.get('nombre')

    if (nombre == '') {
        errNombre.style.display = 'flex'
        return
    }
    contFormNombre.style.display = 'none'
    contPregUno.style.display = 'flex'
})

formPregUno.addEventListener('submit', (e) => {
    e.preventDefault()

    const datos = new FormData(formPregUno)
    respuestaUno = datos.get('preguntaUno')

    contPregUno.style.display = 'none'
    contPregDos.style.display = 'flex'
})

formPregDos.addEventListener('submit', (e) => {
    e.preventDefault()

    const datos = new FormData(formPregDos)
    respuestaDos = datos.get('preguntaDos')

    contPregDos.style.display = 'none'
    contPregTres.style.display = 'flex'
})

formPregTres.addEventListener('submit', (e) => {
    e.preventDefault()

    const datos = new FormData(formPregTres)
    respuestaTres = datos.get('preguntaTres')

    contPregTres.style.display = 'none'
    contPregCuatro.style.display = 'flex'
})

formPregCuatro.addEventListener('submit', (e) => {
    e.preventDefault()

    const datos = new FormData(formPregCuatro)
    respuestaCuatro = datos.get('preguntaCuatro')

    contPregCuatro.style.display = 'none'
    contPregCinco.style.display = 'flex'
})

formPregCinco.addEventListener('submit', (e) => {
    e.preventDefault()

    const datos = new FormData(formPregCinco)
    respuestaCinco = datos.get('preguntaCinco')

    contPregCinco.style.display = 'none'
    contPregSeis.style.display = 'flex'
})

formPregSeis.addEventListener('submit', (e) => {
    e.preventDefault()

    const datos = new FormData(formPregSeis)
    respuestaSeis = datos.get('preguntaSeis')

    contPregSeis.style.display = 'none'
    contPregSiete.style.display = 'flex'
})

formPregSiete.addEventListener('submit', (e) => {
    e.preventDefault()

    const datos = new FormData(formPregSiete)
    respuestaSiete = datos.get('preguntaSiete')

    contPregSiete.style.display = 'none'
    respuestaFinal.style.display = 'flex'

    alert(nombre + respuestaUno + respuestaDos + respuestaTres + respuestaCuatro + respuestaCinco + respuestaSeis + respuestaSiete)
})

if()


