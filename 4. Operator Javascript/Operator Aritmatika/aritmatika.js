var a = +100;
console.log("a = " + a);

var b = -22;
console.log("b = " + b);

var c =  30 + 5;
console.log("c = " + c);

var d = 33.4 + 88.7;
console.log("d = " + d);

var e = 9 * 4;
console.log("e = " + e);

var f = 9 + 2 / 2 + 7;
console.log("f = " + f);

var g = 30 % 7;
console.log("g = " + g);

/*
Angka dan operator yang digunakan dalam kedua contoh diatas sama persis, tapi hasilnya berbeda. Ini terjadi karena di contoh pertama yang dijalankan adalah (4 + (6 / 5) - (3 * 2)+ 3), dimana operator pembagian dan perkalian akan diproses dulu sebelum penambahan dan pengurangan. 
*/
var angka1 = 4 + 6 / 5 - 3 * 2 + 3;
console.log(angka1);

var angka2 = 4 + (6 / 5) - (3 * 2) + 4;
console.log(angka2);