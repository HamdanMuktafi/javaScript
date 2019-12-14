/*

Perbedaanmendasardarivardanletadalahterkaitdenganvariabelscope,yaknidibagianmana sebuah variabel masih bisa diakses. Penjelasan mengenai variabel scope akan saya bahas pada bab tentang function. UntuksaatiniandacukupmemahamibahwadiES6,deklarasivariabelbisamenggunakankata kunci let, dan var juga tetap didukung (bukan sebagai pengganti). Karena masih relatif baru, perintahletinilebihbanyakdigunakanpadakodeprogramJavaScriptdiserversepertiNodeJS. Sebab, ada kemungkinan web browser belum mendukung ECMAScript 6.

*/

let a = "Selamat Pagi";
let b, c;
b = 4000;
c = true;

console.log(a);
console.log(b);
console.log(c);
