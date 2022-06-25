const mongoose = require("mongoose")
const Schema = mongoose.Schema

const tipo = new Schema({
    nome: {
        type: String,
        require: true
    },
    area: {
        type: String,
        require: true
    }
})

mongoose.model("tipo", tipo)