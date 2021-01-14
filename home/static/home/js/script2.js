var lastscrolltop = 0;
var navba  = document.querySelector(".navbar");

window.addEventListener("scroll", function (e) {
    var scrolltop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolltop>lastscrolltop)
    {
        navba.style.top = "-100px";
    }else{
        navba.style.top = "0px";
    }
    lastscrolltop = scrolltop;
})