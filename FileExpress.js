const fs = require('fs')
const express=require('express');
const { fstat } = require('node:fs');

var app=express()
var portnumber=5200;

//configuring route

app.get('/', function(req, res){
    res.send("Welcome.....!")
})

app.listen(portnumber, function() {
    fs.readFile('./files.json', function(err, data){

        if(!err)
        res.send(JSON.parse(data))
    })
    
})
