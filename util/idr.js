function formatIDR(count) {
  let	number_string = count.toString(),
	modulus 	= number_string.length % 3,
	idr 	= number_string.substr(0, modulus),
	thousand 	= number_string.substr(modulus).match(/\d{3}/g);
		
if (thousand) {
	let separator = modulus ? '.' : '';
	idr += separator + thousand.join('.');
  return idr;
}
}

export default formatIDR;