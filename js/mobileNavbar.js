document.addEventListener("DOMContentLoaded", () => {
   
    let toggle = document.getElementById("toggle");
    let navbar = document.getElementById("navbar");

    toggle.addEventListener("click", ()=> {
        navbar.classList.toggle("show");
    });
});
