const express = require("express")
const router = express.Router()
const controllerTipo = require("../controllers/tipo")

router.post("/cadastrarTipo", controllerTipo.cadastro)
router.post("/PegarTipos/:seletor", controllerTipo.seletor)
router.delete("/excluirTipo/:nome", controllerTipo.deletar)

module.exports = router