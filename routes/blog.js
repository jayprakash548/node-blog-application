const express= require('express')
const blogController = require('../controller/blogController')

const setRouter = (app) => {    
    app.get('/hello', blogController.hello);
    app.get('/yes', blogController.yes);
}// End SetRouter Function
module.exports = {
    setRouter:setRouter
}