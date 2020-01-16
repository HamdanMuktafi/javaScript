// result = (condition) ? statement_true : statement_false
// result adalah variabel penampung hasil kondisi. 
// Jika condition bernilai true, akan dijalankan statement_true, yang hasil akhirnya di kirim ke variabel result. 
// Jika condition bernilai false, akan dijalankan statement_false yang hasilnya juga dikirim ke variabel result. 

// var jumlahBarang = 1000;
// var total;

// if (jumlahBarang > 500) {
// 	total = jumlahBarang * 100;
// }else {
// 	total = jumlahBarang * 150;
// }

// console.log(total);

// var jumlahBarang = 501;
// var total;

// total = jumlahBarang > 500? jumlahBarang * 100 : jumlahBarang * 150;
// console.log(total);

var user = "admin";

var hak_akses = user === "admin"? true : false;

if (hak_akses) {
	console.log("selamat datang admin");
}