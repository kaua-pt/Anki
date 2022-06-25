const mongoose = require("mongoose")
const Schema = mongoose.Schema

const questao = new Schema({
    descricao: {
        type: String,
        require: true
    },
    hidden: {
        type: String,
        require: true,
    },
    tipo: {
        type: String,
        //ref: "tipo",
        require: true
    },
    dificuldade: {
        type: Number,
        max: 5,
        default: 0
    }
})

mongoose.model("questao", questao)