var imgs =["img1.jpg","imp2.jpg","imp3.jpg","img4.jpg"]
var next_button = document.querySelector(".button2")
var previous_button = document.querySelector(".button1")
var imgTag = document.querySelector(".imgtag")
var count = 0
next_button.onclick = function (){
    count++
    if(count >=imgs.length){
        count = 0
        imgTag.src = imgs[count]
    }
    else{
        imgTag.src =imgs[count]
    }    
}
previous_button.onclick = function(){
    count--
    if(count < 0){
        count = imgs.length -1
        imgTag.src = imgs[count]
    }
    else{
        imgTag.src =imgs[count]
    }
}