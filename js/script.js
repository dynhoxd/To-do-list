let btn = document.getElementById("btnInsert")
let list = document.getElementById("list")
let Todo = document.getElementById("Todo")
let n = 1;

btn.addEventListener("click", addtodo)
Todo.addEventListener("keypress", event => {
    if (event.key == "Enter") {
        btn.click()
    }
})

function addtodo() {
    let task = "task" + n;
    let todo = Todo.value;
    if (todo.length != 0) {
        list.innerHTML += `<div id="${task}"><input type="checkbox" onchange="check(this.name)" name="${task}"><label for="${task}">${todo}
        </label><button id='btnDelete' name='${task}' onclick='deltodo(this.name)'>Del</button><br><br></div>`;
        Todo.value = ""
        n++
    }else{
        alert("Fill the blank with the task")
    }

}
function deltodo(id) {
    document.getElementById(id).remove()
}

function check(name) {
    let input = document.querySelector('[name=' + name + ']')
    let item = document.querySelector('[for=' + name + ']')
    if(input.checked){
        item.classList.add('checked')
    }else{
        item.classList.remove('checked')
    }
    }
