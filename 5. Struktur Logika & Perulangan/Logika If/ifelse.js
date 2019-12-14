var username = 23.3;

if (typeof username === "string") {
	console.log("Username Valid..")
} else {
	console.log("Validasi Gagal");
}

var user = 44;

if (typeof user === "string") {
	console.log("User = string")
}else if (typeof user === "number") {
	console.log("User = number")
}else {
	console.log("Bukan Sting dan Angka");
}