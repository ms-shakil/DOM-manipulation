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

// creat tag by js
let newElement = document.createElement("h5")
let text = document.createTextNode("this text creat by js")
newElement.appendChild(text)

var mainElement = document.querySelector(".main_element")
mainElement.appendChild(newElement)


// img slider

const img_arr =["img/shakil.jpg","img/samiya1.jpg","img/shakil2.jpg","img/samiya.jpg"]
let imgTag= document.getElementById("img")
let count =0
function NextFun(){
 count++
 if( img_arr.length <=count){
    count =0
    imgTag.src = img_arr[count]
 }
 imgTag.src=img_arr[count]
}


function PrevFun(){
    count--
    if(  count <0){
       count =img_arr.length -1
       imgTag.src = img_arr[count]
    }
    imgTag.src=img_arr[count]
   }