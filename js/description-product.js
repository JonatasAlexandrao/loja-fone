/*
acesso ao navegador
ter o html na mão
pegar o coração
pegar o clique do coração
no momento q for clicado mostrar um texto na tela
*/

const $heart = window.document.querySelector(".-heart");


$heart.addEventListener("click" , handleClick);

function handleClick() {
    console.log("ae");
}