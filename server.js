const cors =require('cors')
const express = require('express') // import express using require()
const productsRouter =require('./products') //this add a product router for products.js file next mount the file
const app = express() // create an app that represents your webserver using the express() the app var is used to define routes, 
// add middleware and control how server responds to request 

app.use(cors({
origin: ['http://localhost:5500' , 'http://127.0.0.1:5500'] //allows to whitelist that can access backend 
}))


// A middleware is simply a function that runs between the incoming request and the final route handler it recives
//  a request and response it can read and change them and then either finish the response or handover to control the next middleware in the chain
app.use((req,res,next)=>{
    console.log(req.method,req.path)
    next() //without the next the req will get stuck in the middleware and will never reach the routehandler 
}) // this is a simple custom middleware that will console log everytime we visit a diff route
//since this is placed above the routes it will all go through this middleware if this is placed below the routes nothing will get logged

app.use(express.json()) //json body parasing lets u send data from frontend

app.use('/products', productsRouter) //mount the products router on the /products path
//express executes from top to bottom say if you put app.use(express.json()) below you post routes then req.body will be undefined in those routes
//same also applies inside a router file 

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

app.get('/message', (req, res) => {
    res.json({message: 'Hello from the backend 🥀'})
})

app.post('/message', (req, res) => {
const{name, message} = req.body // using destructuring
//now you can store the data in a db

console.log('new message: ', name, message)
res.json({message: 'thanks for your message 👍'})

})

app.listen(3000,() => { // we tell express to listen on a port 3000 to start the server
    console.log('Server running')
})
//this is the basic setup needed for minimal express server import , create app and start the server
// a route is simply an instruction that says , if someone visits a specific url send back a specific response
// in express you can create routes using  methods app.get() or app.post() and inside the route handler you decide which data to send back
// a route is defined by 3 things a http method like get or post then a path like / or /about and one or more handoff functions that get 
// called when a request matches that method or path 
// if a request comes in on a specific path run the run the code in the function that builds the respone 

