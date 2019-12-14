var nama, belajar;
nama = "Nama " + "Saya " + "Hamdan";
console.log(nama);

belajar = "ECMAScript " + 6;
console.log(belajar);

var foo, bar, baz;
foo = "Selamat";
baz = " Malam ";
bar = "Semuanya";

hasil = foo + baz + bar;
console.log(hasil);

// Dengan fitur template string dari ECMAScript 6, kita bisa menulis semuanya di dalam string, seperti contoh berikut:
var siswa, satu, dua, tiga;
siswa = ["Hamdan", "Aziz", "Wina", "Agung"];

satu = `${siswa[1]} mendapat reward`;
console.log(satu);

dua = `${siswa[0]} dan ${siswa[1]} adalah teman akrab`;
console.log(dua);

tiga = `Dalam Ujian Kemarin ${siswa[3]} mendapat nilai  ${2*45}`;
console.log(tiga); 