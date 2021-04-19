let menuBtn = document.querySelector(".mobile-menu-btn");
let mobileMenuBlock = document.querySelector(".mobile-menu");


function openMenu () {
    menuBtn.addEventListener('click', function(){
        mobileMenuBlock.classList.add("show-menu");
        hideMenu();
    })
}

function hideMenu () {
    menuBtn.removeEventListener('click', function(){
        mobileMenuBlock.classList.add("show-menu");
        hideMenu();
    })
    menuBtn.addEventListener('click', function(){
        mobileMenuBlock.classList.remove("show-menu");
        openMenu();
    })
}

openMenu();