// 1.Tạo object
const person = {
    personName: "Nguyễn Văn A",
    age: 30,
    address: "Hà Nội",
    isMarried: false
}

// const student = new Object();
// student.studentName = "Nguyễn Văn B";
// student.age = 20;

// 2. Truy cập vào object
console.log("Person name: ", person.personName);
console.log("Person age: ", person.age);

const key = "personName";
console.log("Person name: ", person[key]); // dạng nhập 
console.log("Person address: ", person["address"]);

// Truy xuất đối tượng với Destructuring assigment
const {personName, address,age,isMarried} = person;
console.log(personName,address,age,isMarried);

// 3. Thêm thuộc tính cho object
person.height = 160; // Thêm cho đối tượng person 1 thuộc tính là height
person.weight = "Thin"; // Thêm cho đối tượng person 1 thuộc tính là weight

console.log("Person sau khi được thêm thuộc tính: ", person);

// 4. Cập nhật giá trị 
person.personName = "Trần Văn A";
person.age = 25;

console.log("Person sau khi được cập nhật: ", person);

// 5. Xoá thuộc tính của object
delete person.isMarried;
delete person.address;

console.log("Person sau khi được xoá: ", person);

// TẠO MẢNG ĐỐI TƯỢNG
const teachrs = [
    {
        id: 1,
        teachrName: "Dương Thị Bích",
        age: 18,
    },
    {
        id: 2,
        teachrName: "Trần Anh Quốc",
        age: 18,
    }
]

console.table(teachrs);

// Duyệt qua đối tượng
for(const key in person) {
    console.log("key: ", key);
    console.log("value: ", person[key]);
}

// Lấy ra danh sách các key của object
console.log("Danh sách key của object: ", Object.keys(person));
console.log("Danh sách value của object: ", Object.values(person));

// Optional chaning
const user = {
    name: "Alice",
};

console.log("City: ", user?.address?.city);