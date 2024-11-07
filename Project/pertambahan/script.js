const tambah = () => {
  let nilai1 = parseInt(document.getElementById("input1").value);
  let nilai2 = parseInt(document.getElementById("input2").value);
  math = nilai1 + nilai2;

  document.getElementById("results").innerText = math;
};
