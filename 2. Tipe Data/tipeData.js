/*
	Tipe data primitif merupakan tipe data yang "sederhana" dan hanya terdiri dari satu nilai.
	* Number
	* String
	* Boolean
	* Null
	* Undefined
	* Symbol*

	Selain tipe data ini, ada object. Object bisa disebut sebagai tipe data "khusus" yang perilaku dan isinya bermacam-macam

	* Array
	* Date
	* RegExp
	* Map & WeakMap*
	* Set & WeakSet
*/

// Tipe data number
var angka1 = 100;
var angka2 = -5000;
var angka3 = 0.66634;

console.log(angka1);
console.log(angka2);
console.log(angka3);

// 	PenulisanScientificNotation
/*
	Selain angka “normal”, JavaScript jugamendukung penulisan scientific notation, yakni penulisan seperti 3e3, atau 0.4e-3. Huruf e diantara angka ini menandakan pangkat sepuluh. Sebagai contoh 3e3 artinya 3 x 103 = 3000, sedangkan 0.4e-3 artinya 0.4 x 10-3 = 0.0004. 
*/

//Berikut contoh penggunaannya:
var angka4 = 3e3;
var angka5 = 0.4e-3;
var angka6 = -9.353e6;

console.log(angka4); // 3000
console.log(angka5); // 0.0004
console.log(angka6); // -9353000


// Bilangan Desimal, Biner, Oktal & Heksadesimal
var foo = 999; // angka desimal
console.log(foo);

var foo1 = 0b1111100111; // angka biner
console.log(foo1);

var foo2 = 01747;
console.log(foo2);

var foo3 = 0o1747;
console.log(foo3);

var foo4 = 0x3E7;
console.log(foo4);


// Nan & Infinity
/* 
	* NaN adalah singkatan dari Not a Number yang berarti “bukan sebuah angka”.
	* Infinity atau dalam istilah matematika indonesia dikenal 	dengan “tak hingga”, didapat dari operasi matematika yang tidak umum, misalnya membagi sebuah angka dengan nol. 

*/
var nomor = 9 * "a";
console.log(nomor); // Nan

var nomor1 = 8 / "b";
console.log(nomor1); // Nan

var nomor2 = 6 / 0;
console.log(nomor2); // Infinity

var nomor3 = -5 / 0;
console.log(nomor3); // -Infinity


// Template String
/*
	Template String (atau dikenal juga dengan sebutan string interpolation) merupakan fitur baru di ECMAScript6. Dengan templatestring, kita bisa menampilkan nilai variabel saat berada di dalam string. Fitur ini mirip seperti penggunaan tanda kutip dua di bahasa pemrograman PHP. 
*/
var x = "Hamdan Muktafi";
var y = `Selamat Pagi ${x}`;
console.log(y);

// tanpa template string
var nama = "Nama Saya adalah : ";
var saya = nama + "Hamdan";
console.log(saya);


// Operator typeof
var num = 3;
console.log(typeof num);