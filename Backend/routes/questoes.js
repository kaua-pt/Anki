const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const controllerQuestoes = require("../controllers/questoes")

router.post("/cadastrarQuestao", controllerQuestoes.cadastro)
router.delete("/excluirQuestao", controllerQuestoes.deletar)

module.exports = router