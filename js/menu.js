const menu = document.getElementById('menu');
const menuDesplegable = document.querySelector('.menu-desplegable');

const toggleMenu = ()=>{
    const img = menu.firstElementChild;
    const valorActual = img.getAttribute('src');
    if(valorActual === './images/icon-hamburger.svg'){
        img.setAttribute('src', './images/x.svg');
        menuDesplegable.style.display = "flex";
    }else{
        img.setAttribute('src', './images/icon-hamburger.svg');
        menuDesplegable.style.display = "none";
    }
}

menu.addEventListener('click', toggleMenu)