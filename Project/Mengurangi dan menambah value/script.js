const display = document.getElementById("display");

let nilaiAwal = 0;
display.textContent = nilaiAwal;

const add = () => {
  nilaiAwal++;
  display.textContent = nilaiAwal;
};

const reduce = () => {
  nilaiAwal--;
  display.textContent = nilaiAwal;
};
