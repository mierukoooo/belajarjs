var tanya = true;
while (tanya === true) {
  //menangkap pilihan player
  var p = prompt("Pilih : gajah,semut,orang");

  //menangkap pilihan COM
  //membangkitkan bilangan random
  var comp = Math.random();
  console.log(comp);

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp > 0.34 && comp < 0.66) {
    comp = "orang";
  } else {
    comp = " semut";
  }

  //menentukan rules
  var hasil = "";
  if (p === comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    //   if (comp == orang) hasil = "MENANG!";
    // } else {
    //   hasil = "KALAH!";
    hasil = comp == "orang" ? "MENANG" : "KALAH ";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH" : "MENANG";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "SALAH";
  }
  //tampilkan hasilnya
  alert(
    "Kamu memilih " +
      p +
      " dan KOMPUTER memilih " +
      comp +
      " maka hasilnya adalah \n" +
      hasil
  );
  tanya = confirm("lagi");
  alert("terima kasih sudah bermain");
}
alert("terima kasih sudah bermain");
