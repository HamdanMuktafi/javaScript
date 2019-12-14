// Operator assignment adalah operator yang digunakan untuk memasukkan nilai ke dalam sebuah variabel. Kita sudah berkali-kali menggunakan operator ini, yakni tanda sama dengan ( = ). 
var a = 12;
var b = "Balajar";

a = a + 10;
a = a + a + 5;

b = b + "Javascript";
b = b + "dari buku Javascript Uncover";

console.log(a);
console.log(b);

// Operator Gabungan Assigment
/*
Nama Operator 			Operator 	Contoh 		Hasil 
plus-equals 				+= b 	+= 10 		b = b + 10 
minus-equals 				-= b 	-= 10 		b = b - 10 
divide-equals 				/= 		b /= 10 	b = b / 10 
multiply-equals 			*= 		b *= 10 	b = b * 10 
modulus-equals 				%= 		b %= 10 	b = b % 10 
bitwise-xor-equals 			ˆ= 		b ˆ= 10 	b = b ˆ 10 
bitwise-and-equals 			&= 		b &= 10 	b = b & 10 
bitwise-or-equals 			|= 		b |= 10 	b = b | 10 
left-shift-equals 			<<= 	b <<= 10 	b = b << 10 
right-shift-equals 			>>= 	b >>= 10 	b = b >> 10
*/
var angka = 12;
var huruf = "Javascript";

angka += 10;
angka += angka + 5;
console.log(angka);

huruf += " Javascript";
huruf += "dari buku Javascript Uncover";
console.log(huruf);

angka /= 7;
console.log(angka);

angka -= 5;
console.log(angka);