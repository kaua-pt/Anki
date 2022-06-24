const express = require("express")
const app = express()
const router = express.Router()
const usuario = require("./usuario")

router.get("/", (req, res) => {
    res.send("Base de rotas: User")
})

router.use("/User", usuario)

module.exports = router