var Product = require('../models/product')

exports.index = async function (query, page, limit) {

    try {
        var products = await Product.find(query)
        return products;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}