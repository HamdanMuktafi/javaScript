// Operatorperbandinganberfungsiuntukmemeriksabagaimanahubungansebuahnilaidengan nilai lain, apakah sama besar, tidak sama, lebih besar atau lebih kecil. 
/*
* Nama Operator 		Operator 	Contoh 				Hasil 
* Sama dengan 	  			== 		a == b 		TRUE jika nilai a sama dengan b
* Identik dengan 	  		=== 	a === b 	TRUE jika nilai a sama dengan b, dan memiliki tipe data yang sama  
* Tidak sama dengan 		!= 		a != b 		TRUE jika nilai a tidak sama dengan b 
* Tidak identik dengan 		!== 	a !== b 	TRUE jika nilai a tidak sama dengan b, dan memiliki tipe data yang tidak sama 
* Kurang dari 				< 		a < b 		TRUE jika nilai a kurang dari b 
* Lebih dari 				> 		a > b 		TRUE jika nilai a lebih dari b 
* Kurang dari atau sama dengan <= 	a <= b 		TRUE jika nilai a kurang dari atau sama dengan b 
* Lebih dari atau sama dengan >= 	a >= b 		TRUE jika nilai a lebih dari atau sama dengan b

*/
var a, b, c, d, e, f;

a = 9 < 3;
console.log("a : " + a);

b = 5 < 5;
console.log("b = " + b);

c = 5 <= 5;
console.log("c = " + c);

d = 8 != 12;
console.log('d = ' + d);

e = 15 == 12;
console.log('e = ' + e);

f = 15 === 15;
console.log("f = " + f);

g = 0.3 === 3e-1;
console.log("g = " + g);


// Operator perbandingan juga bisa digunakan untuk tipe data string, seperti contoh berikut:
var aa, bb, cc, dd, ee;

aa = 'a' < 'b';
console.log('aa = ' + aa);

bb = 'a' < 'A';
console.log('bb = ' + bb);

cc = 'Hamdan' < 'Hamdano';
console.log("cc = " + cc);

dd = false < true;
console.log('dd = ' + dd);

ee = 'hamdan' == 12;
console.log("ee = " + ee);

// Jika yang dibandingkan berupa data string,JavaScript menggunakan nomor urut karakter ASCII untuk menentukan huruf mana yang lebih besar. Sebagai contoh, huruf “a” memiliki kode ASCII97desimal,sedangkan“b”beradadiurutan98.Dengandemikianoperasi'a' < 'b' akan menghasilkan true karena ‘a’ dianggap lebih kecil dari ‘b’. 

// Perbedaan antara == dengan ===
/*
Di dalam JavaScript, operator “sama dengan” ada 2 jenis, yakni ==, dan ===. Operator dengan 3 buah sama dengan dikenal juga sebagai“identikdengan”, dan hanya menghasilkan true jika nilai yang dibandingkan memiliki tipe data yang sama. 
*/
// berikut contohnya :
var a1, a2, a3, a4, a5, a6;

a1 = 9 == '9';
console.log('a1 = ' + a1);

a2 = 9 === '9';
console.log('a2 = ' + a2);

a3  = true == 1;
console.log('a3 = ' + a3);

a4 = true === 1;
console.log('a4 = ' + a4);

a5 = false == 0;
console.log('a5 = ' + a5);

a6 = false === 0;
console.log('a6 = ' + a6);


// Di dalam operasi perbandingan, nilai-nilai ini sering menjadi tidak terduga, seperti contoh berikut:
var z, x, v, n, m, q, w, r;

z = '' == '0';
console.log('z = ' + z);

x = 0 == '';
console.log('x = ' + x);

v = 0 == '0';
console.log('v = ' + v);

n = false == 'false';
console.log('n = ' + n);

m = false == '0';
console.log('m = ' + m);

q = false == undefined;
console.log('q = ' + q);

w = false == null;
console.log('w = ' + w);

r = null == undefined;
console.log('r = ' + r);

t = ' \t\r\n' == 0;
console.log('t = ' + t);