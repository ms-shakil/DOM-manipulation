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