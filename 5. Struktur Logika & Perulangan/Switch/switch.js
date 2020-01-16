var situs = "twitter";

switch (situs) {
	case "google":
		console.log('<a href="http://www.google.com">Situs Google</a>');
		break;

	case "facebook":
		console.log('<a href="http://www.facebook.com">Situs Facebook</a>');
		break;

	case "twitter":
		console.log('<a href="http://www.twitter.com">Situs Twitter</a>'); 
		break;

	default:
		console.log('Situs Tidak terdaftar');
}