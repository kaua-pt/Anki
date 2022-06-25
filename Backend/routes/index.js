const express = require("express")
const { route } = require("./usuario")
const app = express()
const router = express.Router()
const usuario = require("./usuario")
const questao = require("./questoes")
const tipo = require("./tipo")

router.get("/", (req, res) => {
    res.send("Base de rotas: User,Questao,Tipo")
})

router.use("/Questao", questao)
router.use("/User", usuario)
router.use("/Tipo", tipo)

module.exports = router