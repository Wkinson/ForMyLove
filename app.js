function MoverPositionRandon(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let BtnSi = document.getElementById("btn_Si");
let BtnNo = document.getElementById("btn_No");
let divModoNov = document.getElementsByClassName("modo_novio")[0];

BtnNo.addEventListener('mouseenter', function(e) {MoverPositionRandon(e.target)});

BtnSi.addEventListener('click', function(e){

    alert("TE AMO UN MONTO");
    divModoNov.style.display = "block";

    const music = new Audio("Aud-Vid\\hot.mp3")
    music.play();

})