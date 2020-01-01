const Store = require('../models/Store');

// @desc Get all stores
// @route GET /api/v1/stores
// @access public
exports.getStores = async (req, res, next) => {
	try {
		const stores = await Store.find();

		return res.status(200).json({
			success: true,
			count: stores.length,
			data: stores
		});
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
};

exports.addStore = async (req, res, next) => {
	try {
		const store = await Store.create(req.body);

		return res.status(200).json({
			success: true,
			data: store
		});
	} catch (error) {
		if (error.code === 11000) {
			return res.status(400).json({ success: false, error: 'This store already exists' });
		}
		res.status(500).json({ success: false, error: error.message });
	}
};
