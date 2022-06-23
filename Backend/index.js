const express = require("express")
const cors = require("cors")
const session = require("express-session")
const mongoose = require("mongoose")
const app = express()
const rotasUser = require("./routes/index")
require("./models/Usuario")
const PORT = 8888

app.use(session({
    secret: "apsdiunapsdun", //chave para gerar uma sessão
    resave: true,
    saveUninitialized: true,
}))

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/WegoJIM")

app.use(express.json())
app.use(cors())

app.use("/", rotasUser)

app.listen(PORT, () => { console.log("Servidor aberto na porta 8888") })