window.onscroll = function() {
    var nav =  document.getElementById("navbar");
    var cards = document.getElementById("cards");
    if(pageYOffset >= 589) {
        nav.classList.add("bg-dark","navbar-dark");
        nav.style.transition = "0.6s";
    } else {
        nav.classList.remove("bg-dark","navbar-dark");
        nav.classList.add("bg-light","navbar-light");
    };
    if (pageYOffset >= 600) {
        cards.style.display = "flex";
        cards.style.transition = "0.6s";
    };
}