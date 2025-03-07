let students = ["Anh Quoc", "Viet Anh", "Hong Ky", "VTV"];
console.log(students);

// Read one - Lay 1 phan tu
students[3]; // "VTV"
console.log(students[3], "Cut");

students[students.length -1]; // "VTV"

// Read all - Lay toan bo phan tu
for( i = 0;  i < students.length; i ++ ) {
    console.log(students[i], "Cut het");
}

// for(i = students.length ; i <= 0 ; i--) {
//     console.log(students[i], "Cut het");
// }

for (let student of students) {
    console.log(students);
}

for (let index in students) {
    console.log(index, students[index]);
}

// Create - Them dau 
// .unshift(new);
students.unshift("Quoc Khanh");
console.log(students);

// Create - Them cuoi
// .push(new);
students.push("Gia Hung");
console.log(students);

// Create - Them vao vi tri bat ky
// .splice(index, 0, new);
students.splice(2, 0, "Thai Son");
console.log(students);

// Update - Cap nhat
students[6] = "Hong Anh";
console.log(students);

// Delete - Xoa
// Xoa dau 
// .shift()
students.shift();
console.log(students);
// Xoa cuoi
// .pop()
students.pop();
console.log(students);
// Xoa vi tri bat ky
// .splice(index, 1)
students.splice(3, 1);
console.log(students);