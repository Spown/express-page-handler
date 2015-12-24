module.exports = function expressPageHandler() {
	var ret = {}, middle = []
	;
	ret.mask = arguments[0];
	if (arguments.length > 2) {
		for (var i = 1; i < arguments.length-1; i++) {
			middle.push(arguments[i]);
		}
	}
	arguments.length >= 2 && (ret.handler = arguments[arguments.length-1]);
	return ret;
};