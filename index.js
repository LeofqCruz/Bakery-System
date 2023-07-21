const App = require('./App.js')

const app = new App()

app.createUser('Leo Cruz', 'leo@gmail.com')

const user = app.getUsers()

app.createBread('Pão Francês', '....',0.95, 100)
app.createBread('Baguete', '....', 5.45, 30)

const bread = app.getBreads()

app.createCake('Prestígio', '....', 'Chocolate e coco', '200g', 8.20, 5)
app.createCake('Fubá', '....', 'Fubá de milho', '200g', 7.50, 27)

const cake = app.getCakes()

app.createCandy('Broa', '....', 'Milho', '60g', 3.50, 20)
app.createCandy('Torta de Morango', '....', 'Morango', '250g', 8.25, 15)

const candy = app.getCandies()

app.createDrink('Café Preto', '....', '250ml', 3.50, 100)
app.createDrink('Café com leite', '....', '250ml', 4.50, 100)

const drink = app.getDrinks()

app.createLunchMeat('Presunto', '....', '200g', 4.50, 200)
app.createLunchMeat('Mortadela', '....', '200g', 3.50, 200)

const lunchMeat = app.getLunchMeats()

app.showDatabase()

const item = [
    {
        product: bread[0],
        quantity: 10
    },
    {
        product: cake[1],
        quantity: 1
    },
    {
        product: candy[1],
        quantity: 2
    },
    {
        product: drink[0],
        quantity: 1
    },
    {
        product: lunchMeat[1],
        quantity: 1
    }
]

app.createOrder(item, user[0])

app.showDatabase()