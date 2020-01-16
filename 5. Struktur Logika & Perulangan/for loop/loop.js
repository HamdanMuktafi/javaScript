/*
 *	for (start; condition; increment) { statement; }
 *	Start diisi dengan kondisi awal dari perulangan. 
 *	Biasanya kita mendefenisikan sebuah variabel counter yang berfungsi mengontrol perulangan. 
 * 	Sebagai contoh, saya bisa menulis var i = 1. 
 * 	Variabel i disini berperan sebagai variabel counter. 
 *	Condition biasanya diisi dengan operasiperbandingan, selama operasi ini menghasilkan nilai true, perulangan akan dijalankan terus. 
 *	Sebagai contoh jika saya menulis i < 10, artinya perulangan akan terus dijalankan selama nilai variabel i kurang dari 10.
 *	Increment diisi dengan instruksi untuk menaikkan nilai variabel counter. 
 *	Dalam setiap perulangan, baris ini akan dieksekusi. 
 *	Sebagai contoh, saya bisa membuat i++, yang artinya nilai variabel i akan naik 1 angka dalam setiap perulangan.
*/

// for (var i = 1; i < 10; i++) {
// 	console.log("Hello World " + i);
// }

// for (var i = 10; i >= 1; i--) {
// 	console.log("Hello World " + i);
// }

// for (var i = 2; i <= 20; i = i + 2) {
// 	console.log("Hello " + i);
// }

for (var i = 5; i < 100; i = i + 5) {
	console.log("Angka " + i + " * 5 " + i * 5);
}