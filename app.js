const express = require("express")
// const axios = require('axios')
const mongoose = require('mongoose')
const path = require('node:path')

const Item = require("./mongoSchema")
// const { stringify } = require("node:querystring")
const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname)))

mongoose.connect('mongodb://127.0.0.1:27017/toListDB')

app.post("/",(req,res) => {
    console.log(req.body)
    const {itemName} = req.body
    console.log(itemName)
    item(itemName)
    // res.send("Done")
})

app.get('/GetData',(req,res) => {
    Item.find()
    .then((data) => res.json(data)) 
    .catch(err => console.log(err))
})

// res.send(Object.assign({},data))






async function item(itemName){
    const oneItem = await Item.create({
        item : itemName ,
        createdAt : Date.now()
    })
    console.log(oneItem)
}

const port = 5500
app.listen(port,() =>{
    console.log(`http://localhost:${port}`)
})