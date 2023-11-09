var angka = 9;
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++)
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log("Angkot " + noAngkot + " yang beroperasi");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot " + noAngkot + " tidak beroperasi");
  }
