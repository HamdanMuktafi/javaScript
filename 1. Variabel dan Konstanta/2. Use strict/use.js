// Strict mode memaksa JavaScript menampilkan error pada kode program yang seharusnya bisa berjalan “normal”. Tujuannya, meminimalisir kemungkinan bug karena penulisan yang salah, typo,danberbagaihallain.Strictmodesepenuhnyaopsionaldanmungkintidakbisaselaluanda gunakan, terutama jika terdapat kode JavaScript pendahulu yang terlalu rumit untuk diubah semuanya. 

"use strict";

var hargaBarang = 12000;
var ongkosKirim = 5000;
var totalBiaya = hargaBarang + ongkosKirim;

var pajak = 10 / 100 * totalBiaya;

var totalBayar = totalBiaya + pajak;
console.log(totalBayar);


/*

Kitadisarankanmenjalankanstrictmodekedalamsebuahanomymfunction(fungsiyangtidak memiliki nama), yang ditulis seperti berikut ini:

(function () {
	"use strict";
	// kode program javascript disini
}());

Tujuannya, agar bisa memisahkan kode program apa saja yang ingin dijalankan di dalamStrict mode dan mana yang tidak. Untuk kode program yang ingin dijalankan di dalam Strict mode, tempatkan ke dalam function ini. Selain itu, kode program di luar function bisa dijalankan dengan cara biasa (dikenal dengan istilah sloppy mode). 

*/

// Berikut contoh kode program totalBiaya sebelumnya jika menggunakan anomym function:
(function () {
	"use strict"; // seluruh program dijalankan dalam strict mode

	var harga = 200000;
	var ongkos = 3000;
	var total = harga + ongkos;

	var pajak = 10 / 100 * total;

	var bayar = total + pajak;
	console.log(bayar);
}());