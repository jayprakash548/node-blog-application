const http = require('http')
const express = require('express') // This is needed to import express in our application
const appConfig = require('./config/appConfig') // Include appConfig File
const app = express() // Just decalre instance

const hello = (req, res) => res.send('Hello Jay Prakash!')
app.get('/', hello) 
app.listen(appConfig.port, () => console.log('Blog Listening at port 3000!')) // Listening at port 3000