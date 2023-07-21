const Product = require("./Product")

module.exports = class Drink extends Product {
    constructor(name, description, milliliters, price, inStock = 0) {
        super(name, description, price, inStock)
        this.milliliters = milliliters
        this.category = 'Drink'
    }
}