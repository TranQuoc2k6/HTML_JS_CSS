let tasks = JSON.parse(localStorage.getItem("tasks")) || [
    {
        id: 1,
        content: "Learn Javascript Session 01",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Anh Bách",
    },
    {
        id: 2,
        content: "Learn Javascript Session 2",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Lâm",
    },
    {
        id: 3,
        content: "Learn CSS Session 1",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Hiếu Ci ớt ớt",
    },
];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const table = document.getElementById("taskTable");
    table.innerHTML = "";

    tasks.forEach((task, index) => {
        const row = `<tr>
              <td>${index + 1}</td>
              <td>${task.content}</td>
              <td>${task.dueDate}</td>
              <td>${task.status}</td>
              <td>${task.assignedTo}</td>
              <td>
                  <button class="action-btn edit-btn" onclick="editTask(${task.id
            })">Sửa</button>
                  <button class="action-btn delete-btn" onclick="deleteTask(${task.id
            })">Xóa</button>
              </td>
          </tr>`;
        table.innerHTML += row;
    });
}

document.getElementById("submitTask").addEventListener("click", () => {
    const content = document.getElementById("taskContent").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("taskStatus").value;
    const assignedTo = document.getElementById("assignedTo").value.trim();

    if (!content || !dueDate || !assignedTo) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        content,
        dueDate,
        status,
        assignedTo,
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();

    document.getElementById("taskContent").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("assignedTo").value = "";
});

function editTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    const newContent = prompt("Enter new content:", task.content);
    const newDueDate = prompt("Enter new due date:", task.dueDate);
    const newStatus = prompt(
        "Enter new status (Pending/Completed):",
        task.status
    );
    const newAssignedTo = prompt("Enter new assigned person:", task.assignedTo);

    if (newContent && newDueDate && newAssignedTo) {
        task.content = newContent;
        task.dueDate = newDueDate;
        task.status = newStatus;
        task.assignedTo = newAssignedTo;

        saveTasks();
        renderTasks();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}

function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks();
    renderTasks();
}

renderTasks();