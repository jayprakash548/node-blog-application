const express= require('express')
const blogController = require('../controller/blogController')

let setRouter = (app) => {        
    app.get('/test/route/:firstname/:lastname',blogController.testRoute)
    app.get('/test/query',blogController.testQuery)
    app.post('/test/body',blogController.testBody)
}// End SetRouter Function
module.exports = {
    setRouter:setRouter
}