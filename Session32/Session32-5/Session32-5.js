let todoList = [];
let id = 0;
let listTask = [];
let btn;

let ul = document.getElementById("myUL");
let add = document.getElementsByClassName("addBtn");
let input = document.getElementById("myInput");
let yes = document.getElementById("yes");
let no = document.getElementById("no");

read();
add[0].onclick = () => {
    if (input.value !== "") {
        let addValue = {
            id: id++,
            task: input.value,
            completed: false,
        };
        todoList.push(addValue);
        read();
        input.value = "";
    } else {
        alert("Chưa nhập Tai tồ");
    }
};

function read() {
    listTask = todoList.map((value) => {
        if (value.completed === true) {
            return `
          <li id="${value.id}"  class="checked">${value.task} <i class="fa-solid fa-xmark close btnClose"></i> </li>
      `;
        } else {
            return `
          <li id="${value.id}" >${value.task} <i class="fa-solid fa-xmark close btnClose"></i> </li>
      `;
        }
    });
    ul.innerHTML = listTask.join("");
    btn = document.getElementsByClassName("btnClose");
    deleteTask();
}

function deleteTask() {
    for (let i in btn) {
        btn[i].onclick = function () {
            yes.parentElement.parentElement.style.display = "flex";
            yes.onclick = () => {
                let id = +btn[i].parentElement.id;
                let findIndex = -1;
                for (let index in todoList) {
                    if (id === todoList[index].id) {
                        findIndex = index;
                        break;
                    }
                }
                todoList.splice(findIndex, 1);
                read();
                yes.parentElement.parentElement.style.display = "none";
            };
            no.onclick = () => {
                yes.parentElement.parentElement.style.display = "none";
            };
        };
    }
}