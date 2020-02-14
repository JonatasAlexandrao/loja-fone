
let valorInicial = 10;

const $second = window.document.querySelector(".-second");


$second.addEventListener("click" , handleClick);


function handleClick(){
    const $carrinho = window.document.querySelector(".-last");
    //valorInicial++;
    
    $carrinho.textContent = `Carrinho(${++valorInicial})`;

}