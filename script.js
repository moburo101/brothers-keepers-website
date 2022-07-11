var icon = document.querySelector(".icon");

icon.addEventListener("click", function(){
    navBar()
});

function navBar(){
    var nav = document.getElementById("navItems");
    if(nav.className === "nav-items"){
        nav.classList.add("responsive");
    } else{
        nav.className = "nav-items";
    }
}