const Product = require('../models/product')
var ProductService = require('../services/product')    

exports.index = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        var products = await ProductService.index({}, page, limit)
        return res.status(200).json({ status: 200, data: products, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}