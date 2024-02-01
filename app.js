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


// from heandling

let form =document.querySelector("form")
let name = form.querySelector("div #name")
let email = form.querySelector("div #email")
let password = form .querySelector("div #password")


form.addEventListener("submit",fromHandle)

function fromHandle(e){
   e.preventDefault()
   const userInfo={
            name :name.value,
            email: email.value,
            password:password.value
   } 
   console.log(userInfo)
   name.value=""
   email.value =""
   password.value = ""
}


/////////
console.clear()
console.log(window.location)

let location_div = document.querySelector(".location_div")
let p1 = location_div.children[0]
p1.textContent =location.href

let p2 = location_div.children[1]
p2.textContent =location.protocol

let p3 = location_div.children[2]
p3.textContent =location.hostname

let p4 = location_div.children[3]
p4.textContent =location.port

let face =document.querySelector("#facebook")
face.addEventListener("click",function(){
    location.assign("https://www.facebook.com")
})

//popup box

function deleteSomthing(){
    let value = confirm("Do you want ot delete?")
    if(value){
        console.log("delete")
    }else{
        console.log("not delete")
    }
}
deleteSomthing()


//promt

function wellcome(){
    let h1=document.createElement("h1")
    let text 
    let name =prompt("Enter Your name:")
    if(name == null || name ==""){
        text ="no name found"
    }else{
        text = name
    }
    var textNode = document.createTextNode(text)
    h1.appendChild(textNode)
    document.body.appendChild(h1)
}
wellcome()


// time out
let save = document.querySelector(".save_btn")
let message = document.querySelector(".message")
let message2 = document.querySelector(".message2")
save.addEventListener("click", saveUse)
function saveUse(){
    message.textContent ="User Registration is successful"
    setTimeout(()=>{
        message.textContent =""
    },2000)
}

save.addEventListener("click",myFun)
function myFun(){
    let count =1
    message2.textContent =count
    setInterval(() => {
        count++
        message2.textContent =count

    }, 1000);

}