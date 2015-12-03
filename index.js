module.exports = function expressPageHandler(mask, handler) {
	return {'mask': mask, 'handler': handler};
};