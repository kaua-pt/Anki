const express = require("express")
const router = express.Router()
const controllers = require("../controllers/user")

router.post("/Registro", controllers.registro)
router.post("/Login", controllers.login)
router.patch("/Alterar", controllers.alterar)

module.exports = router