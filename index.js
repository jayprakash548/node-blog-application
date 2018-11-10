const http = require('http')
const express = require('express') // This is needed to import express in our application
const appConfig = require('./config/appConfig') // Include appConfig File
const app = express() // Just decalre instance
const fs = require('fs')
const mongoose = require('mongoose')

//Bootstrap Models, It's basically used to multiple JS files
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function(file){
    if(~file.indexOf('.js')) require(modelsPath+ '/' + file)              
}) // End Bootstrap Model
//Bootstrap Routes, It's basically used to multiple JS files
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function(File){
    if(~File.indexOf('.js')){        
        const route = require(routesPath +'/' + File);             
        route.setRouter(app);
    }
})


app.listen(appConfig.port, () => {
    console.log(`Blog Listening at port ${appConfig.port}!`);
    const db = mongoose.connect(appConfig.db.uri, {useNewUrlParser: true});
}) // Listening at port 3000

//Handling Mongoose connection Error
mongoose.connection.on('error', function (err){
    console.log('Databse COnnection Error')
    console.log(err)
});// End Mongoose connection Error
//Handling Mongoose Success Event
mongoose.connection.on('open', function (err){
    if(err){
        console.log('Database Error')
        console.log(err)
    }else{
        console.log('Database Connection Open Successfully')
    }
});//End Handling Mongoose Success Event