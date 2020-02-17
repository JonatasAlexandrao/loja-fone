/*
acesso ao navegador
ter o html na mão
pegar o coração
pegar o clique do coração
no momento q for clicado mostrar um texto na tela
*/

const $heart = window.document.querySelector(".-heart");
$heart.addEventListener("click" , handleClick);

//desafio 14
const $stars = document.querySelectorAll(".star");
var positionLast = $stars.length -1;


$stars.forEach(function($star, key){
    
   /* if(key == 0) {
        $star.addEventListener("click", firstStar);
    }

    if(key == positionLast) {
        $star.addEventListener("click", lastStar);
    }

    if(key > 0 && key < positionLast){
        $star.addEventListener("click", function() {
            middleStar(key);
        });
    }*/
    $star.addEventListener("click", function() {
        middleStar(key);
    });

});

function handleClick() {
    this.classList.toggle("-active");
}

function middleStar(index) {
    
    $stars.forEach(function ($star, key){
        $star.classList.remove("-active");
        if(key <= index){
            $star.classList.add("-active");
        }
    });     
}
/*
function firstStar(){  
    $stars.forEach(function ($star){
        $star.classList.remove("-active");
    });
    this.classList.add("-active"); 
}

function lastStar() {
    $stars.forEach(function($star) {
        $star.classList.add("-active");
    });
}
*/
