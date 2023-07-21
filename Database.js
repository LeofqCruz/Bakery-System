module.exports = class Database {
    #storage = {
        breads: [],
        cakes: [],
        candies: [],
        drinks: [],
        lunchMeats: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key] || []
    }


    findBreadByName(breadName) {
        return this.#storage.breads.find(b => b.name === breadName)
    }

    saveBread(bread) {
        const breadExists = this.findBreadByName(bread.name)
        if(!breadExists) {
            this.#storage.breads.push(bread)
        }
    }

    addBreadToStock(breadName, quantity) {
        const bread = this.findBreadByName(breadName)
        bread?.addToStock(quantity)
    }

    removeBreadFromStock(breadName, quantity) {
        const bread = this.findBreadByName(breadName)
        bread?.removeFromStock(quantity)
    }


    findCakeByName(cakeName) {
        return this.#storage.cakes.find(c => c.name === cakeName)
    }

    saveCake(cake) {
        const cakeExists = this.findCakeByName(cake.name)
        if(!cakeExists) {
            this.#storage.cakes.push(cake)
        }
    }

    addCakeToStock(cakeName, quantity) {
        const cake = this.findCakeByName(cakeName)
        cake?.addToStock(quantity)
    }

    removeCakeFromStock(cakeName, quantity) {
        const cake = this.findCakeByName(cakeName)
        cake?.removeFromStock(quantity)
    }


    findCandyByName(candyName) {
        return this.#storage.candies.find(c => c.name === candyName)
    }

    saveCandy(candy) {
        const candyExists = this.findCandyByName(candy.name)
        if(!candyExists) {
            this.#storage.candies.push(candy)
        }
    }

    addCandyToStock(candyName, quantity) {
        const candy = this.findCandyByName(candyName)
        candy?.addToStock(quantity)
    }

    removeCandyFromStock(candyName, quantity) {
        const candy = this.findCandyByName(candyName)
        candy?.removeFromStock(quantity)
    }


    findDrinkByName(drinkName) {
        return this.#storage.drinks.find(d => d.name === drinkName)
    }

    saveDrink(drink) {
        const drinkExists = this.findDrinkByName(drink.name)
        if (!drinkExists) {
            this.#storage.drinks.push(drink)
            }
    }

    addDrinkToStock(drinkName, quantity) {
        const drink = this.#storage.findDrinkByName(drinkName)
        drink?.addToStock(quantity)
    }

    removeDrinkFromStock(drinkName, quantity) {
        const drink = this.#storage.findDrinkByName(drinkName)
        drink?.removeFromStock(quantity)
    }

    findLunchMeatByName(lunchMeatName) {
        return this.#storage.lunchMeats.find(lm => lm.name === lunchMeatName)
    }

    saveLunchMeat(lunchMeat) {
        const lunchMeatExists = this.findLunchMeatByName(lunchMeat.name)
        if (!lunchMeatExists) {
            this.#storage.lunchMeats.push(lunchMeat)
        }
    }

    addLunchMeatToStock(lunchMeatName, quantity) {
        const lunchMeat = this.findLunchMeatByName(lunchMeatName)
        lunchMeat?.addToStock(quantity)
    }

    removeLunchMeatFromStock(lunchMeatName, quantity) {
        const lunchMeat = this.findLunchMeatByName(lunchMeatName)
        lunchMeat?.removeFromStock(quantity)
    }


    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if(!userExists) {
            this.#storage.users.push(user)
        }
    }

    saveOrder(order) {
        this.#storage.orders.push(order)
    }

    showStorage() {
        console.table(this.#storage.breads)
        console.table(this.#storage.cakes)
        console.table(this.#storage.candies)
        console.table(this.#storage.drinks)
        console.table(this.#storage.lunchMeats)
        console.table(this.#storage.orders.map(order => order.data))
    }
}