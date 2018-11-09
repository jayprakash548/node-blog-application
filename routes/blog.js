const express= require('express')

const setRouter = (app) => {
    const hello = (req, res) => res.send('Hello Jay Prakash!')
    const yes = (req, res) => res.send('Yes Mr. Jay Prakash!')
    app.get('/hello', hello);
    app.get('/yes', yes);
}
module.exports = {
    setRouter:setRouter
}