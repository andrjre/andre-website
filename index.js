
let title = document.getElementById("andreTitle");
let titleText = document.getElementById("andreTitle").textContent;
let aText = document.querySelector("a")

title.onclick = function(){
    title.classList.add("rainbow")
}


let button = document.querySelector("#button")
let git = document.getElementById("git")

button.addEventListener("mouseover",function(){console.log("gello")},
    function(){aText.style.color = "black"},
    
)

git.addEventListener("mouseover", function(){console.log("gello");})