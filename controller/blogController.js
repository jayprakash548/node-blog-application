const express = require('express')

const hello = (req, res) => res.send('Hello Jay Prakash!')
const yes = (req, res) => res.send('Yes Mr. Jay Prakash!')

module.exports = {
    hello : hello,
    yes : yes
}