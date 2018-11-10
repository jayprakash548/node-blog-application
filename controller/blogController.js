const express = require('express')
const mongoose = require('mongoose')

const BlogModel = mongoose.model('Blog')

let testRoute = (req,res) =>{
    console.log(req.params)
    res.send(req.params)
}// End Test

let testQuery = (req,res) =>{
    console.log(req.query)
    res.send(req.query)
}// End Test
let testBody = (req,res) =>{
    console.log(req.body)
    res.send(req.body)
}// End Test

module.exports = {
    testRoute:testRoute,
    testQuery:testQuery,
    testBody:testBody    
}