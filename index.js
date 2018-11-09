const http = require('http')
const express = require('express') // This is needed to import express in our application
const appConfig = require('./config/appConfig') // Include appConfig File
const app = express() // Just decalre instance
const fs = require('fs')
//Bootstrap Routes, It's basically used to multiple JS files
const routesPath = './routes'
fs.readdirSync(routesPath).forEach(function(File){
    if(~File.indexOf('.js')){        
        const route = require(routesPath +'/' + File);
        route.setRouter(app);
    }
});
app.listen(appConfig.port, () => console.log(`Blog Listening at port ${appConfig.port}!`)) // Listening at port 3000