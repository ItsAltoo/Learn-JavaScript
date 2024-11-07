let jumlahApp = 10;
let runningApp = 5;

for (i = 1; i <= jumlahApp; i++) {
  if (i <= runningApp && i !== 3) {
    console.log("sedang running No. :" + i);
  } else if (i === 8 || i === 7 || i === 3) {
    console.log("sedang install No. :" + i);
  } else {
    console.log("sedang error No. :" + i);
  }
}
