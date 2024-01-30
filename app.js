let header = document.getElementById("main-header")
console.log(header)

let listItems = document.getElementsByClassName("list-item")
console.log((listItems))
let listItemByTag = document.getElementsByTagName("li")
console.log(listItemByTag)


document.querySelector("#main-header").innerHTML ="Favorute Sports Frachise"


// click er jnno onclick use !
function Button_Fun(){
   document.querySelector("#message_box").innerHTML ="Congratulation  for learning javascipt."
}


// image 
var my_img = document.querySelector("#imgTag")
function MsFun(){
    my_img.src = "img/shakil.jpg"
}
function SamFun(){
    my_img.src = "img/samiya.jpg"
}