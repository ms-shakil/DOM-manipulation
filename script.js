let val = document.getElementById("header")

val.innerHTML ="Hello Bangladesh"

let val2 = document.getElementsByClassName("lorem1")[0]

val2.innerHTML = "about class name"

// getElementsByTagName, getElementsByName and getElementByClassName those also working same bye index number
// querySelector take all tag singaly, quearySelectorAll take all tag


// onclick
function clickMe(){
    document.write("hei ki obsta!")
}
function myFun(){
    document.getElementById("time_box").innerHTML = Date()
}

let sami = document.getElementById("samu_btn")
sami.style.color= "red"
sami.style.padding ="18px"
function Samu(){

    document.querySelector("#samu_bio").innerHTML = "Hi, this is Samiya Sultana.I'm from comilla University.I'm studey at Mathmathics department "
}


///
let items = document.getElementsByClassName("item")

for(let i=0;i<items.length;i++){
    items[i].style.color = "green"
}