let food = JSON.parse(localStorage.getItem("food")) || [
    {
        name: "Bún bò Huế",
        like: 0,
        img: "https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg",
    },
    {
        name: "Phở bò Hà Nội",
        like: 0,
        img: "https://cdn-i.vtcnews.vn/resize/th/upload/2023/04/21/top-19-quan-pho-ha-noi-ngon-nuc-tieng-an-la-ghien-phan-2-05-1639125425-23532263.jpg",
    },
    {
        name: "Cơm tấm Sài Gòn",
        like: 0,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg/1200px-C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg",
    },
];

let foodList = document.getElementById("container");
let btnLike = document.getElementsByClassName("btn-like");

display();
likeClick();
function likeClick() {
    for (let i in btnLike) {
        btnLike[i].onclick = () => {
            food[i].like++;
            display();
            save();
        };
    }
}

function display() {
    let newFoodList = food.map((element) => {
        return `
      <div class="box-food">
          <img
            class="img"
            src= ${element.img}
            alt=""
          />
          <div class="box">
            <h4>${element.name}</h4>
            <p>❤️ <span>${element.like}</span> lượt thích</p>
            <button class="btn btn-like">Thích +1</button>
          </div>
        </div>
      `;
    });
    foodList.innerHTML = newFoodList.join("");
    likeClick();
}

function save() {
    localStorage.setItem("food", JSON.stringify(food));
}