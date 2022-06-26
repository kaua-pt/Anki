const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const controllerQuestoes = require("../controllers/questoes")

router.post("/pegarQuestao", controllerQuestoes.pegar)
router.post("/cadastrarQuestao", controllerQuestoes.cadastro)
router.delete("/excluirQuestao", controllerQuestoes.deletar)
router.patch("/mudarHidden/:hidden", controllerQuestoes.mudarHidden)
router.patch("/mudarDif", controllerQuestoes.mudarDif)

module.exports = router