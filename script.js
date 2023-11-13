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

const g = document.querySelector(".grandparent")
// const p = g.children 
// const c = p[0].children
                     // if we do under comment line . we can't to do lne 38 and 39
const c = g.querySelectorAll('.child')
for(let i =0; i<c.length;i++){
    c[i].style.color ="blue"
}



// creat element

// const divElement = document.createElement("div")
// divElement.className = "red"
// divElement.setAttribute("id","red")
// divElement.setAttribute("title","red div")
// g.insertBefore(divElement,p)

//evan
let btn = document.querySelector(".evan_")

let data = document.querySelector(".evan_p")

btn.addEventListener("click",(event)=>{
    data.innerHTML = "hei ki obsta"
})
