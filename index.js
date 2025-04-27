
let title = document.getElementById("andreTitle");
let titleText = document.getElementById("andreTitle").textContent;

let splitTitle = []
splitTitle = titleText.split("")
console.log(splitTitle)

splitTitle[0].onclick = function(){
    console.log("helloooo")
}

title.onclick = function(){
    console.log("gello")    
}

let button = document.querySelector(".button")
let git = document.getElementById("git")


git.addEventListener("mouseover", function(){console.log("gello");})