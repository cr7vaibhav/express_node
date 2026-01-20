const express = require('express') // import express using require()
const app = express() // create an app that represents your webserver using the express()
// s the app var is used to define routes ,add middleware and control how server responds to request 

app.get('/', (req, res) => {
res.send('Hello from express')
}) 
// inside get we get a request and respond object req is the requested info and responsed to send something back
// if we have a website that need some stuff from a db we need to create a get route to send info to frontend

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/contact', (req, res) => {
    res.send('yo wassup')
})

app.get('/products', (req, res) => {
    res.json([
        {id:1, name: 'laptop', price: 1299},
        {id:2, name: 'mouse', price: 50},

    ])
})//real api's communicate using json JavaScript Object notation text format used to represent structured data 
// can use res.json() to send a response as json

app.get('/products/:id', (req, res) => {
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

app.listen(3000,() => { // we tell express to listen on a port 3000 to start the server
    console.log('Server running')
})
//this is the basic setup needed for minimal express server import , create app and start the server
// a route is simply an instruction that says , if someone visits a specific url send back a specific response
// in express you can create routes using  methods app.get() or app.post() and inside the route handler you decide which data to send back
// a route is defined by 3 things a http method like get or post then a path like / or /about and one or more handoff functions that get 
// called when a request matches that method or path 
// if a request comes in on a specific path run the run the code in the function that builds the respone 

