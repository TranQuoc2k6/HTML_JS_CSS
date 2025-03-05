// for...loop - Vong lap for



// for (let i = 1; i <= 3; i = i + 1) {
// Tac vu can lap
// Lam bai thi Hackathon
// console.log(i);
// }

// Lan lap i = 1; i(1) <= 3  (true), Tac vu lap xay ra, i = i(1) + 1 = 2;
// Lan lap i = 2; i(2) <= 3  (true), Tac vu lap xay ra, i = i(2) + 1 = 3;
// Lan lap i = 3; i(3) <= 3  (true), Tac vu lap xay ra, i = i(3) + 1 = 4;
// Lan lap i = 4; i(4) <= 3  (false), Tac vu lap khong xay ra, DUNG VONG LAP;

// for (let i = 0; i <= 9; i = i + 1) {
//     for (let j = 0; j <= 9; j = j + 1) {
//         console.log(`${i}${j}`);
//     }
// }


// while(condition) {
//     // code
// }


// Bai tap

// Cach 1:

// Cho san 1 bien result = 49
// let result = 49;
// // Cho nguoi dung nhap vao so can doan (answer)
// let answer = +prompt("Nhap vao so can doan");

// // Neu nguoi dung nhap sai answer !== result
//     // --> Lap lai qua trinh cho nguoi dung nhap vao so
//     while(answer !== result) {
//         answer = +prompt("Cau tra loi chua dung. Can nhap lai");
//     }
//     // Doan va kiem tra nhu o tren 
// // Neu nguoi dung nhap dung answer == result --> bingo
// console.log("BINGO");
// // Dung lai

// // Cach 2:
// let result = 49;
// let loop = true;
// while (loop === true) {
//   let answer = prompt("Mời bạn nhập vào số cần đoán");

//   if (answer === result) {
//     console.log("BINGO");
//     loop = false;
//   }
// }


let condition = 1;
do {
    console.log("Hello world");
} while (condition === 0);