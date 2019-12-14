// operator logika
/*
Operator logika digunakan untuk membandingkan 2 kondisi logika, yakni logika benar (true) dan logika salah (false). Nilai yang dibandingkan harus bertipe boolean. Jika tidak, JavaScript akan mengkonversinya secara otomatis berdasarkan falsy dan truthy value.

Nama Operator 	Operator 	Contoh 		Hasil 
* and 				&& 		a && b 		true, jika a dan b sama-sama bernilai true 
* or 					|| 		a || b 		true, jika salah satu dari a atau b bernilai true 
* not 				! 		!a 			true, jika a bernilai false.
 

*/

var a, b, c, d, e;

a = true && false;
console.log('a = ' + a);

b = true || false;
console.log('b = ' + b);

c = !false;
console.log('c = ' + c);

d = true || true && false;
console.log('d = ' + d);

e = false && true || true;
console.log('e = ' + e);

// konsep short - circuit evaluation
/*
Ketika memproses operasi logika yang cukup panjang, JavaScript mengunakan konsep shortcircuitevaluation. Maksudnya, jika dengan memeriksa 1 nilai saja hasil operasi tersebut sudah diketahui, nilai - nilai lain tidak akan di periksa. 
*/
var foo1 = true	|| false || true;
console.log('foo1 = ' + foo1);

var foo2 = false && true && true;
console.log('foo2 = ' + foo2);

// Fiturshort-circuitevaluationinicukuppentingdipahamikarenaseringdigunakandalamkode program lanjutan, misalnya dalam contoh berikut:
var bar = true;
var food = bar && alert("Hello Hamdan");

// operasi logika non boolean
/* 
Salah satu fitur unik di dalam JavaScript adalah, jika operasi logika dijalankan untuk data non boolean, hasil akhir dari operasi ini juga bukan berupa boolean, tapi nilai terakhir dari pemrosesan tersebut
*/
var satu, dua, tiga, empat, lima, enam, tujuh, delapan;

satu = "Hamdan" || "Muktafi";
console.log(satu);

dua = "Hamdan" && "Muktafi";
console.log(dua);

tiga = true || "JavaScript";
console.log(tiga);

empat = false || "JavaScript";
console.log(empat);

lima = "Hamdan" && false;
console.log(lima);

enam = false && "JavaScript";
console.log(enam);

tujuh = false || false && true || "JavaScript";
console.log(tujuh);

delapan = true || false && true || "JavaScript";
console.log(delapan);

