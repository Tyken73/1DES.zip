function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

function siteEtec(){
    window.location = "http://etecperuibe.com.br/localizacao-e-contato/"
}
function Instagram(){
    window.open('https://www.instagram.com/1des.zip/', '_blank');
}

var click = false;

function trocadecor(){
    var change = document.getElementById('body');
    let Box1 = document.querySelectorAll(".contatoBox");
    let Box2 = document.querySelectorAll(".contatoTituloImg");
    let Box3 = document.querySelectorAll(".contatoTituloTexto");

    if(!click) {
    change.style.backgroundColor = '#222222';
    for (let i = 0; i < Box1.length; i++) {
      Box1[i].style.filter = "invert(1)";
    }
    for (let i = 0; i < Box2.length; i++) {
        Box2[i].style.filter = "invert(1)";
    }
    for (let i = 0; i < Box3.length; i++) {
      Box3[i].style.filter = "invert(1)";
    }


    click = true;

    document.getElementById('darkmodeicon').src='img/lightmode.png';
    document.getElementById('darkmodetext').textContent='Light Mode';

    }else{
        change.style.backgroundColor = '#fff';
        for (let i = 0; i < Box1.length; i++) {
            Box1[i].style.backgroundColor = 'rgb(238, 238, 238)';
            Box1[i].style.filter = "invert(0)";
          }
        for (let i = 0; i < Box2.length; i++) {
            Box2[i].style.filter = "invert(0)";
        }
        for (let i = 0; i < Box3.length; i++) {
          Box3[i].style.filter = "invert(0)";
        }
        click = false;

        document.getElementById('darkmodeicon').src='img/darkmode.png';
        document.getElementById('darkmodetext').textContent='Dark Mode';
    }
}