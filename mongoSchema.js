const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    item: String,
    createdAt: Date
})


module.exports = mongoose.model("Item",itemSchema)

