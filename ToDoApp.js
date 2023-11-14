let NewTask = document.querySelector("#new_task")
let form = document.querySelector("form");
let incomUL = document.querySelector("#items")
let comUl = document.querySelector(".list_box2 ul")

//creat element

function CreatElement(task){
    let ListItem = document.createElement("li")
    let checkBox = document.createElement("input")
    let Label = document.createElement("label")

    Label.innerHTML =task
    checkBox.type ="checkbox"
    ListItem.appendChild(checkBox)
    ListItem.appendChild(Label)
    return ListItem

}

function AddTask(event){

}