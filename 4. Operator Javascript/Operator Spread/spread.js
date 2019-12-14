// Operatorspread, atau spreadoperator, merupakan operator baru diECMAScript6. Operator ini digunakan untuk berbagai keperluan yang berhubungan dengan array, salah satunya untuk menggabungkan array. 
// Spread operator menggunakan tanda titik tiga kali(…),kemudian di ikuti dengan nama variabel. 
// Berikut contoh penggunaannya:
var nilai1 = ["a", "b", "c", "d"];
console.log(nilai1);

var nilai2 = [1, 2, 3, 4];
console.log(nilai2);

var nilai3 = [...nilai1, "e", "f"];
console.log(nilai3);

var nilai4 = [0, ...nilai2, 5, 6];
console.log(nilai4);