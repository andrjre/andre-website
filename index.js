
let title = document.getElementById("andreTitle");
let titleText = document.getElementById("andreTitle").textContent;

let splitTitle = []
splitTitle = titleText.split("")
console.log(splitTitle)

splitTitle[1].onclick = function(){
    console.log("helloooo")
}


let button = document.querySelector(".button")
let git = document.getElementById("git")


git.addEventListener("mouseover", function(){console.log("gello");})