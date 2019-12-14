// Operator bitwise adalah operator khusus untuk menangani operasi logika bilangan biner. Bilanganbinerataubinaryadalahjenisbilanganyanghanyaterdiridari2karakterangka,yakni 0 dan 1. Contohnya 1100 dan 1110 0110. 
/*
	Nama 				Operator 	Contoh 					Hasil 
* 	and 					& 		a & b 		1, jika kedua bit bernilai 1. 
* 	or (inclusive or) 		| 		a | b 		1, jika salah satu bit bernilai 1. 
* 	xor (exclusive or) 		ˆ 		a ˆ b 		1, jika salah satu bit bernilai 1, tapi bukan keduanya 
* 	not (negasi) 			∼ 		∼a 			bit 0 menjadi 1, dan bit 1 menjadi 0. 
* 	shift left 				<< 		a << b 		menggeser sebanyak b bit ke kiri (setiap 1 kali pergeseran = kelipatan 2) 
* 	shift right 			>> 		a >> b 		menggeser sebanyak b bit ke kanan (setiap 1 kali pergeseran = bagi 2)

*/
var a = 0b10101010;
var b = 0b11011110;

console.log(a);
console.log(b);

var foo1, foo2, foo3, foo4, foo5, foo6;

foo1 = a & b;
console.log(foo1);

foo2 = a | b;
console.log(foo2);

foo3 = a ^ b;
console.log(foo3);

foo4 = ~a;
console.log(foo4);

foo5 = a >> 2;
console.log(foo5)

foo6 = a << 3;
console.log(foo6);