// const $search = document.querySelector('[type=search]')

// $search.addEventListener('click', () => {
// $search.classList.toggle('-active')
// })

const $inputSearch = document.querySelector('.input-search')
const $open = $inputSearch.querySelector('.-open')
const $close = $inputSearch.querySelector('.-close')


$open.addEventListener('click', event => {
    event.preventDefault() // remove o evento padrão, nesse caso o envio do formulario
    $inputSearch.classList.toggle('-active')
    $open.classList.remove('-active')
    $close.classList.add('-active')
})

$close.addEventListener('click', event => {
    event.preventDefault()

    $inputSearch.classList.toggle('-active')
    $close.classList.remove('-active')
    $open.classList.add('-active')
    
})