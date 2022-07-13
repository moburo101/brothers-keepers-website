var burger = document.querySelector(".burger");
var nav = document.querySelector(".nav-items");
var items = document.querySelector(".nav-items a")

burger.addEventListener("click", function(){
    nav.style.display = "block";
    navBar()
});

function navBar(){
    var nav = document.getElementById("navItems");
    if(nav.className === "nav-items"){
        nav.classList.add("res-nav-items");
    } else{
        nav.className = "nav-items";
    }
}