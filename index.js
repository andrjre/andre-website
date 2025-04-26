
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