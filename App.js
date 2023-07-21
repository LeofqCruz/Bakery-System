const Database = require('./Database.js')
const Bread = require('./entities/Bread.js')
const Cake = require('./entities/Cake.js')
const Candy = require('./entities/Candy.js')
const Drink = require('./entities/Drink.js')
const LunchMeat = require('./entities/LunchMeat.js')
const Order = require('./entities/Order.js')
const User = require('./entities/User.js')

module.exports = class App {
    static #database = new Database()

    createUser(fullname, email) {
        const user = new User(fullname, email)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users')
    }

    createBread(name, description, price, inStock) {
        const bread = new Bread(name, description, price, inStock)
        App.#database.saveBread(bread)
    }

    getBreads() {
        return App.#database.find('breads')
    }

    addBread(breadName, quantity) {
        App.#database.addBreadToStock(breadName, quantity)
    }

    createCake(name, description, flavor, weight, price, inStock) {
        const cake = new Cake(name, description, flavor, weight, price, inStock)
        App.#database.saveCake(cake)
    }

    getCakes() {
        return App.#database.find('cakes')
    }

    addCake(cakeName, quantity) {
        App.#database.addCakeToStock(cakeName, quantity)
    }

    createCandy(name, description, flavor, weight, price, inStock) {
        const candy = new Candy(name, description, flavor, weight, price, inStock)
        App.#database.saveCandy(candy)
    }

    getCandies() {
        return App.#database.find('candies')
    }

    addCandy(candyName, quantity) {
        App.#database.addCandyToStock(candyName, quantity)
    }

    createDrink(name, description, milliliters, price, inStock) {
        const drink = new Drink(name, description, milliliters, price, inStock)
        App.#database.saveDrink(drink)
    }

    getDrinks() {
        return App.#database.find('drinks')
    }

    createLunchMeat(name, description, weight, price, inStock) {
        const lunchMeat = new LunchMeat(name, description, weight, price, inStock)
        App.#database.saveLunchMeat(lunchMeat)
    }

    getLunchMeats() {
        return App.#database.find('lunchMeats')
    }

    addLunchMeat(lunchMeatName, quantity) {
        App.#database.addLunchMeatToStock(lunchMeatName, quantity)
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Bread) {
                App.#database.removeBreadFromStock(product.name, quantity)
            } else if (product instanceof Cake) {
                App.#database.removeCakeFromStock(product.name, quantity)
            } else if (product instanceof Candy) {
                App.#database.removeCandyFromStock(product.name, quantity)
            } else if (product instanceof LunchMeat) {
                App.#database.removeLunchMeatFromStock(product.name, quantity)
            }
        })
    }

    getOrders() {
        return this.#database.find('orders')
    }

    showDatabase() {
        App.#database.showStorage()
    }
}