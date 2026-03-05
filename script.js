const formNombre = document.getElementById('form-nombre')
const contFormNombre = document.querySelector('.form-nombre')
const pregUno = document.querySelector('.preg-uno')

let nombre = ''

formNombre.addEventListener('submit', (e) => {
    e.preventDefault()

    const datos = new FormData(formNombre)
    nombre = datos.get('nombre')

    contFormNombre.style.display = 'none'
    pregUno.style.display = 'flex'
})
