const Product = require("./Product")

module.exports = class Cake extends Product {
    constructor(name, description, flavor, weight, price, inStock = 0) {
        super(name, description, price, inStock)
        this.flavor = flavor
        this.weight = weight
        this.category = 'Cake'
    }
}