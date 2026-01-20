const express = require('express') // import express using require()
const app = express() // create an app that represents your webserver using the express()
// s the app var is used to define routes ,add middleware and control how server responds to request 

app.get('/', (req, res) => {
res.send('Hello from express')
}) // inside get we get a request and respond object req is the requested info and responsed to send something back
// if we have a website that need some stuff from a db we need to create a get route to send info to frontend

app.listen(3000,() => { // we tell express to listen on a port 3000 to start the server
    console.log('Server running')
})
//this is the basic setup needed for minimal express server import , create app and start the server
// a route is simply an instruction that says , if someone visits a specific url send back a specific response
// in express you can create routes using  methods app.get() or app.post() and inside the route handler you decide which data to send back
