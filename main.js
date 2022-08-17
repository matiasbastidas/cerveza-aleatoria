document.addEventListener('DOMContentLoaded', () => {
    const botonInicio = document.querySelector('.btn-cerveza')
    const cervezaAleatoria = document.querySelector('.cerveza-aleatoria')
    const mostrarDescripcion = document.querySelector('.descripcion')
    const mostrarABV = document.querySelector('.abv')
    const mostrarIBU = document.querySelector('.ibu')
    const mostrarEBC = document.querySelector('.ebc')

    const recogerDatos = (e) => {
        e.preventDefault()
        fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json()
        })
        .then( ( [ {name, description, abv, ibu, ebc}]) => {
            cervezaAleatoria.innerHTML = 'Nombre: ' + name
            mostrarDescripcion.innerHTML = 'Descripción:  ' + description
            mostrarABV.innerHTML = 'ABV (Alcohol por volumen) :  ' + abv
            mostrarIBU.innerHTML = 'IBU (Unidad Internacional de Amargor) :  ' + ibu
            mostrarEBC.innerHTML = 'EBC (Convención Europea Cervecera):  ' + ebc
        })
    } 

    botonInicio.addEventListener('click', recogerDatos)
})
