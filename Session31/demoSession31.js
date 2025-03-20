// console.dir(document);
// //id
// let h1 = document.getElementById("demo-id");  // h1(#demo - )
// console.log(h1);
// //class
// let tagList = document.getElementsByClassName("demo-class"); //h1, b , u
// console.log(tagList);

// // Truy cập và lấy ra thẻ i (phần tử tại vị trí 2)
// console.log(tagList[2]); //i

// // Làm việc với toàn bộ phần tử HTML trong tagList
// for( let i = 0; i < tagList.length ; i++) {
//     console.log(tagList[i]);
// }

let iTag = document.getElementsByClassName("demo-class")[2];
console.dir(iTag);
// Kiểm soát content - nội dung
console.log(iTag.innerHTML);
console.log(iTag.innerText);
console.log(iTag.textContent);

let p = document.getElementById("demo-inner");
console.log(p.innerHTML);
console.log(p.innerText);
console.log(p.textContent);

p.textContent = "Jello world !!!"; // Bỏ qua style css
p.innerText = "983274503sdfgj !@#%@"; // Có style css
p.innerHTML = `
<span>1</span>
<u>123</u>
<i>321</i>`;

// id
console.log(p.id); // "demo-inner"

// style
p.style.width = "200px"
p.style.height = "200px"
p.style.borderRadius = "50%"
p.style.color = "black"
p.style.border = "20px solid black"
p.style.fontSize = "20px"
p.style.lineHeight = "200px"
p.style.backgroundColor = "pink"
p.style.textAlign = "center"
console.log(p.style);

let abbr = document.getElementsByClassName("class-01")[0];
console.log(abbr);
// Kiểm soát danh sách class của thẻ abbr
console.log(abbr.classList);

abbr.classList.add("circle");

// abbr.classList.remove("circle");

// .parentElement

// .child
console.log(abbr.parentElement.parentElement);
