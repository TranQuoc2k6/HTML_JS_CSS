
document.addEventListener("DOMContentLoaded", loadEmployees);

function loadEmployees() {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let table = document.getElementById("employeeTable");
    table.innerHTML = "";
    employees.forEach((emp, index) => {
        let row = `<tr>
              <td>${index + 1}</td>
              <td>${emp.name}</td>
              <td>${emp.position}</td>
          </tr>`;
        table.innerHTML += row;
    });
}

function addEmployee() {
    let name = document.getElementById("name").value.trim();
    let position = document.getElementById("position").value.trim();
    if (!name || !position) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push({ name, position });
    localStorage.setItem("employees", JSON.stringify(employees));

    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
    loadEmployees();
}
