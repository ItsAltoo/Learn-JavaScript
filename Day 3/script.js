let isiBelanjaan = [];

while (true) {
  console.log("~~~~~~~~~~~Pilih Belanjaan Anda~~~~~~~~~~~~");
  console.log("1.Keyboard           5.Mouse Pad");
  console.log("2.Monitor            6.Ram");
  console.log("3.Mouse              7.Cek Belanjaan");
  console.log("4.Laptop             8.Keluar");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  pilihan = prompt("Masukkan Pilihan anda 1-8 :");

  if (pilihan === "1") {
    pilihan = "keyboard";
    isiBelanjaan.push(pilihan);
    console.log(`anda telah menambahkan : "${pilihan}"`);
  } else if (pilihan === "2") {
    pilihan = "Monitor";
    isiBelanjaan.push(pilihan);
    console.log(`anda telah menambahkan : "${pilihan}"`);
  } else if (pilihan === "3") {
    pilihan = "Mouse";
    isiBelanjaan.push(pilihan);
    console.log(`anda telah menambahkan : "${pilihan}"`);
  } else if (pilihan === "4") {
    pilihan = "Laptop";
    isiBelanjaan.push(pilihan);
    console.log(`anda telah menambahkan : "${pilihan}"`);
  } else if (pilihan === "5") {
    pilihan = "Mouse Pad";
    isiBelanjaan.push(pilihan);
    console.log(`anda telah menambahkan : "${pilihan}"`);
  } else if (pilihan === "6") {
    pilihan = "Ram";
    isiBelanjaan.push(pilihan);
    console.log(`anda telah menambahkan : "${pilihan}"`);
  } else if (pilihan === "7") {
    while (true) {
      console.log("\n==================Daftar Belanjaan====================");
      isiBelanjaan.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
      console.log("=======================================================");

      let exit = prompt("Pilih y/n untuk keluar :");

      if (exit === "y") {
        break;
      } else if (exit === "n") {
        console.log("Exit dibatalkan, ketik y/n untuk memilih exit");
      } else {
        console.log("Masukkan input yang benar");
      }
    }
  } else if (pilihan === "8") {
    break;
  } else {
    console.log("Masukkan Pilihan 1-8 :");
  }
}
