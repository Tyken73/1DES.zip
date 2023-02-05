function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

var click = false;

function trocadecor()
{
    var change = document.getElementById('body');
    var top = document.querySelector('h1');

    if(!click) {
    change.style.backgroundColor = '#222222';
    change.style.color = '#fff';

    click = true;

    document.getElementById('darkmodeicon').src='img/lightmode.png';
    document.getElementById('darkmodetext').textContent='Light Mode';

    }else{
        change.style.backgroundColor = '#fff';
        change.style.color = '#222222';
        
        click = false;

        document.getElementById('darkmodeicon').src='img/darkmode.png';
        document.getElementById('darkmodetext').textContent='Dark Mode';
    }
}