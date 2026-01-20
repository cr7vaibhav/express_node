// express router
const express =require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.json([
        {id:1, name: 'laptop', price: 1299},
        {id:2, name: 'mouse', price: 50},

    ])
})//real api's communicate using json JavaScript Object notation text format used to represent structured data 
// can use res.json() to send a response as json

router.get('/special', (req, res) => {
    const specialProduct = {
        name: "Special Product",
        price: 67
    }
    res.json(specialProduct)
})//the two get routes are confilicting and this specail is an id so it is trying to get a product with the id special so 
// to fix this we have to switch the orders of our routes /specail has to come first

router.get('/:id', (req, res) => {
    const id= Number(req.params.id)

    const products=[
        {id:1, name: 'laptop', price: 1299}, 
        {id:2, name: 'mouse', price: 50},
    ]
    const requestedProduct =products.find((product) => product.id === id)
    res.json(requestedProduct)
})//a route parameter is a variable inside a url that let you server handle dynamic values, like /product/5 or /users/abc123
// in express you write this with a colon /products/:id
//whatever repalaces :id in the url becomes the req.params.id in your route handler

//we already have a route that gets a specific product 
// more specific routes like /special should be defined before the generic route /:id 
// with this structure express can still read files form top to bottom this way the specific routes get there chance first 
// and the generic routes handle only what is left over


router.post('/', (req, res) => {
    const {name, price} = req.body
    const newProduct= {
        name,
        price
    }
    console.log(newProduct)
        res.json({message : "New product added", product: newProduct})
})

module.exports =router //this controls what a file makes visible to other files in nodejs project 
//we can now delete the /products form paths