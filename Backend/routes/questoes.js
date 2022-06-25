const express = require("express")
const mongoose = require("mongoose")
require("../models/Questao")
require("../models/Tipo")
const Tipo = mongoose.model("tipo")
const Questao = mongoose.model("questao")
const router = express.Router()

router.post("/cadastrarQuestao", (req, res) => {
})

module.exports = router