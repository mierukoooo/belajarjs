// let angka = 1;
// let hasil = 100;

// for (angka = 1; angka <= hasil; angka += 5) {
//   if (angka % 6 === 0) {
//     console.log(+angka + "bilangan anda genap");
//   } else {
//     console.log(+angka + "bilangan anda ganjil");
//   }
// }

let bintang = 1;
let angka = 1;
let jumlahbaris = 5;

for (angka = 1; angka <= jumlahbaris; angka++) {
  let str = "";
  for (bintang = 1; bintang <= angka; bintang++) {
    str += "*";
  }
  console.log(str);
}
