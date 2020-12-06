var button1 = document.querySelector(".butt")
var Ptag = document.querySelector(".ptag")

button1.addEventListener("click",function(){
    Ptag.innerHTML +="You  clicked the button"
})
button1.addEventListener("mouseover",function(){
    Ptag.innerHTML +="You mouseover the button"
})
button1.addEventListener("mouseout",function(){
    Ptag.innerHTML +=" Mouseout  the button"
})