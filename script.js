window.onload = function(){
    var menu_btn = document.querySelector(".hamburger");
    var nav = document.querySelector(".nav-bar");

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    }); 
}