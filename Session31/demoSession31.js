console.dir(document);
//id
let h1 = document.getElementById("demo-id");  // h1(#demo - )
console.log(h1);
//class
let tagList = document.getElementsByClassName("demo-class"); //h1, b , u
console.log(tagList);

// Truy cập và lấy ra thẻ i (phần tử tại vị trí 2)
console.log(tagList[2]); //i

// Làm việc với toàn bộ phần tử HTML trong tagList
for( let i = 0; i < tagList.length ;) {
    console.log(tagList[i]);
}

 