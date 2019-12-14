// Nested if else, dikenal juga dengan struktur if bersarang. Disini kita membuat perbacangan kode program yang cukup kompleks, dimana di dalam if, terdapat if lain. 
var foo = "Hamdan";
console.log("Nilai foo : " + foo);

if (typeof foo === "number") {
	console.log("foo bertipe number")
	if (foo >= 10) {
		console.log("Nilai foo Lebih besar dari 10");
	}else {
		console.log("Niai foo Lebih Kecil dari 10");
	}
}else if (typeof foo === "string") {
	console.log("foo bertipe string");
	if (foo === "Hamdan") {
		console.log("Nilai foo : " + foo);
	}
}

var nama = 3;
console.log("Nama Saya : " + nama);

if ((typeof nama === "string") && (nama === "Hamdan")) {
	console.log("nama bertipe string");
	console.log("Namanya Hamdan");
}else if ((typeof nama === "number") && (nama === 3)) {
	console.log("nama bertipe number");
	console.log("angka 5");
}else {
	console.log("Bukan string atau number");
}