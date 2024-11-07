// tugas 2
// menghitung total gaji yang di dapat dalam 1 bulan denga input minimal:
// nama karyawan,gaji perhari,jumlah masuk kerja
function nama(nama, gaji, kerja, bulan) {
  console.log("nama karyawan =", nama);
  console.log("gaji perhari = Rp", gaji);
  console.log("total kerja perminggu =", kerja, "hari");
  console.log("total kerja perbulan =", bulan, "hari");
  console.log("total gajih perbulan = Rp", gaji * kerja * bulan);
}

nama("andi", 10000, 6, 30);
