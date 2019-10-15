const router = require('express').Router()
const connect = require('../../db/')
const mongoose = require('mongoose')

const category = new mongoose.Schema({
    name: String
})

const Category = mongoose.model('category', category)

connect()
    .then(async connection => {
        const category = await Category.create({name: "Malina"})
        console.log(category)
    })
    .catch(e => console.log(e))

module.exports = router