(function(){//Función autoinvocada (para proteger las variables)
    const openButton = document.querySelector('.navMenu'); //Obtenemos al elemento navMenu
    const menu = document.querySelector('.navLink');
    const closeMenu = document.querySelector('.navClose');
    

    openButton.addEventListener('click', ()=>{
        menu.classList.add('navLink--show');
    });

    closeMenu.addEventListener('click',()=>{
        menu.classList.remove('navLink--show');
    });
})();