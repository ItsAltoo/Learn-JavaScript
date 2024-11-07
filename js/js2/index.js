const btn = document.getElementById("btn");
const body = document.body;
const text1 = document.createElement("p");

btn.style.background = "red";
btn.style.padding = "10px";
btn.style.margin = "5px";
btn.style.borderRadius = "6px";
btn.style.fontSize = "15px";
btn.style.border = "none";
btn.style.color = "white";

function textIn() {
  text1.textContent = "klik sini bg";
  body.append(text1);
  text1.style.color = "white";
}

function textOut() {
  text1.style.color = "aqua";
}
