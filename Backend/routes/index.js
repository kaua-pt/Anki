const express = require("express")
const { route } = require("./usuario")
const app = express()
const router = express.Router()
const usuario = require("./usuario")
const questao = require("./questoes")

router.get("/", (req, res) => {
    res.send("Base de rotas: User")
})

router.use("/Questao", questao)
router.use("/User", usuario)

module.exports = router