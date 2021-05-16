const h1 = document.querySelector("h1");

h1.addEventListener("click", function() {
    if (h1.style.color == "white")
        h1.style.color = "magenta";
    else 
        h1.style.color = "white";
});