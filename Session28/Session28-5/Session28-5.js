let company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name: "Nguyễn Văn Luận", position: "Developer" },
        { name: "Nguyễn Văn Hoàng", position: "Tester" },
        { name: "Hoàng Nam Cao", position: "Manager" },
    ],
};
console.log(company.name);
console.log("Nhan vien cong ty gom:");
company.employees.forEach(function (element) {
    console.log(element.name)
});