window.addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector(".popup").classList.add("show");
    }, 1100);
});

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("show");
});


// menu mobile
document.addEventListener("DOMContentLoaded", function () {
    const open = document.getElementById("open_menu");
    const menu = document.querySelector(".mobile_menu");

    open.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
