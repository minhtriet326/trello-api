// const express = require('express')
import express from "express"
const app = express()
const hostname = 'localhost'
const port = 8017
app.get('/', function (req, res){
    res.send('<h4>Hello World</h4>')
})

app.listen(port, hostname, () =>{
    console.log(`Hello ${hostname}:${port}`)
})