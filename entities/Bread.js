const Product = require("./Product")

module.exports = class Bread extends Product {
    constructor(name, description, price, inStock = 0) {
        super(name, description, price, inStock)
        this.category = 'Bread'
    }
}