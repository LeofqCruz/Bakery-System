const Product = require("./Product")

module.exports = class LunchMeat extends Product {
    constructor(name, description, weight, price, inStock = 0) {
        super(name, description, price, inStock)
        this.weight = weight
        this.category = 'Lunch Meats'
    }
}