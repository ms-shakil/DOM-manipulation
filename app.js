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


   // css add remvoe

let heading = document.querySelector("#add_css")
function AddCss(){
   heading.classList.add("text_style")
}

function RemoveCss(){
   heading.classList.remove("text_style")
}
let learnJs =document.querySelector(".learn_js")
learnJs.addEventListener("mouseover",function(){
      learnJs.classList.add("text_style")
})

learnJs.addEventListener("mouseout",function(){
   learnJs.classList.remove("text_style")
})

// multi addeventlistern add

let myBtn = document.querySelectorAll(".my_button")
for(let i =0;i<3;i++){
   myBtn[i].addEventListener("click",function(){
      let text =this.innerHTML
      document.querySelector("#text_area").innerHTML = text +"  is clicked"
   })
}

// audio play

for(let i =0;i<3;i++){
   document.querySelectorAll(".audio_btn")[i].addEventListener("click",function(){
      let btn_text = this.innerHTML
      console.log(btn_text)
      audioPlay(btn_text)

   })
}
// key press

for(let i =0;i<3;i++){
   document.querySelectorAll(".audio_btn")[i].addEventListener("keypress",function(event){
     var inner_text = event.key
      audioPlay(inner_text)

   })
}

function audioPlay(text){
   switch(text){
      case "A":
         var mp =new Audio("soundss/a1.mp3")
         mp.play()
         break;
      case "B":
         var mp1 =new Audio("soundss/a2.mp3")
         mp1.play()
         break;

      case "C":
         var mp2 =new Audio("soundss/a3.mp3")
         mp2.play()
         break;   
   }
}