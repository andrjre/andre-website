
let title = document.getElementById("andreTitle");
let titleText = document.getElementById("andreTitle").textContent;
let aText = document.querySelector("a")
let submit = document.querySelector("#submit")
let footer = document.querySelector("#footer")

submit.addEventListener("click", 
    function()
    {console.log("Form Submitted!")
    let confirm = document.createElement("div")
    confirm.id = "confirm"
    confirm.textContent = "confirmed!"
    footer.append(confirm)
    submit.disabled = true
    }
)
    


title.onclick = function(){
    title.classList.add("rainbow")
}


let button = document.querySelector("#button")
let git = document.getElementById("git")

button.addEventListener("mouseover",function(){console.log("gello")},
    function(){aText.style.color = "black"},
    
)

git.addEventListener("mouseover", function(){console.log("gello");})