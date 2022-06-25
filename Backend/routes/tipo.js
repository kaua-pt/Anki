const express = require("express")
const mongoose = require("mongoose")
require("../models/Tipo")
const Tipo = mongoose.model("tipo")
const router = express.Router()

router.post("/cadastrarTipo", (req, res) => {
    Tipo.findOne({ nome: req.body.nome }).then((tipo) => {
        if (tipo) {
            res.send("Tipo já cadastrado")
        } else {
            const novoTipo = {
                nome: req.body.nome,
                area: req.body.area
            }

            new Tipo(novoTipo).save()
                .then(res.send("Tipo cadastrado com Sucesso"))
        }
    })
})

router.post("/PegarTipos/:seletor", (req, res) => {

    console.log(req.body)

    if (req.params.seletor == "nome") {
        Tipo.find({ nome: req.body.nome }).then((nomes) => {
            console.log(nomes)

            res.send({ msg: nomes })

            console.log("?")
        }).catch(res.send("Não foi encontrado nenhum tipo com esse nome"))
    }


    if (req.params.seletor == "area") {
        Tipo.find({ area: req.body.area }).then((areas) => {
            res.send({ msg: areas })
        }).catch(res.send("Não foi encontrado nenhuma área com esse nome"))
    }
})

router.delete("/excluirTipo/:nome", (req, res) => {
    Tipo.deleteOne({ nome: req.params.nome }).then((err) => {
        if (err) {
            res.send("Não foi possível apagar este tipo")
        } else {
            res.send("Tipo apagado com sucesso")
        }
    })
})

module.exports = router