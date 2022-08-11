document.addEventListener('DOMContentLoaded', () => {
    const botonInicio = document.querySelector('.btn-cerveza')
    const cervezaAleatoria = document.querySelector('.cerveza-aleatoria')
    const mostrarDescripcion = document.querySelector('.descripcion')
    const mostrarABV = document.querySelector('.abv')
    const mostrarIBU = document.querySelector('.ibu')
    const mostrarEBC = document.querySelector('.ebc')

    function recogerDatos(e) {
        e.preventDefault()
        fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json()
        })
        .then(datos => {
            const nombre = datos[0].name
            const descripcion = datos[0].description
            const abv = datos[0].abv
            const ibu = datos[0].ibu
            const ebc = datos[0].ebc
            cervezaAleatoria.innerHTML = 'Nombre: ' + nombre
            mostrarDescripcion.innerHTML = 'Descripción:  ' + descripcion
            mostrarABV.innerHTML = 'ABV:  ' + abv
            mostrarIBU.innerHTML = 'IBU:  ' + ibu
            mostrarEBC.innerHTML = 'EBC:  ' + ebc
        })
    }
    botonInicio.addEventListener('click', recogerDatos)
})