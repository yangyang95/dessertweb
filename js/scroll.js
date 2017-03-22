window.onscroll = function() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var element = document.getElementById("menu_backgroud");
    if (top > 0) {
        element.style.display = "inline";
    } else {
        element.style.display = "none";
    }
};