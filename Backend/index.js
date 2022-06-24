const express = require("express")
const cors = require("cors")
const session = require("express-session")
const mongoose = require("mongoose")
const app = express()
const rotasBase = require("./routes/index")
const PORT = 8888

app.use(session({
    secret: "apsdiunapsdun", //chave para gerar uma sessão
    resave: true,
    saveUninitialized: true,
}))

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/Anki")

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("dale")
})

app.use("/Anki", rotasBase)

app.listen(PORT, () => { console.log("Servidor aberto na porta 8888") })