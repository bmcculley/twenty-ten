function mD() {
    var e = document.getElementsByClassName("menu")[0];
    "none" === e.style.display || "" === e.style.display ? e.style.display = "block" : e.style.display = "none"
}

function wR() {
    var e = document.getElementsByClassName("menu")[0],
        n = window.innerWidth;
    e.style.display = n >= 480 ? "block" : "none"
}
window.onresize = wR, document.getElementsByClassName("navbar-btn")[0].addEventListener("click", mD);