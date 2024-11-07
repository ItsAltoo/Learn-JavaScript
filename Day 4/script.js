let box1 = document.querySelector("#box1 p");
let btn = document.getElementById("btn");
const li = document.querySelectorAll("#box1 ul li");
const box2 = document.querySelector(".box2 h3");

for (let i = 0; i < li.length; i++) {
  setTimeout(() => {
    li[i].style.backgroundColor = "tomato";
    if (i == 2) {
      li[i].style.backgroundColor = "blue";
      li[i].style.color = "white";
    }
  }, 2000);
}

function btnClick() {
  btn.innerHTML = "Sudah Di Klik";
  btn.style.backgroundColor = "blue";
  btn.style.color = "#fff";
  boxDua();
}

const boxDua = () => {
  setTimeout(() => {
    box2.innerHTML = "rawrrr";
  }, 2000);
};
