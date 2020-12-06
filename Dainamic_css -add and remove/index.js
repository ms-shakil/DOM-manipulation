var ptag = document.querySelector(".dainamic_css")
var butt1 = document.querySelector(".button1")
var butt2 = document.querySelector(".button2")

butt1.onclick = function(){
    ptag.classList.add("css_style")
}
butt2.onclick = function(){
    ptag.classList.remove("css_style")
}