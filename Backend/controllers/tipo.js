const express = require("express")
const { rmSync } = require("fs")
const mongoose = require("mongoose")
require("../models/Tipo")
const Tipo = mongoose.model("tipo")
const router = express.Router()

const cadastro = (req, res) => {
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
}

const seletor = (req, res) => {

    if (req.params.seletor == "nome") {
        Tipo.find({ nome: req.body.nome }).then((nomes) => {
            if (nomes) {
                res.send({ msg: nomes })
            } else {
                res.send("Não foi encontrado nenhum tipo com este nome")
            }
        })
    }


    if (req.params.seletor == "area") {
        Tipo.find({ area: req.body.area }).then((areas) => {
            if (areas) {
                res.send({ msg: areas })
            } else {
                res.send("Não foi encontrado nenhuma area com este nome")
            }
        })
    }
}

const deletar = (req, res) => {
    Tipo.deleteOne({ nome: req.params.nome }).then((msg) => {
        if (msg.deletedCount > 0) {
            res.send("Tipo apagado com sucesso")
        } else {
            res.send("Não foi possível apagar este tipo")
        }
    })
}

module.exports = { cadastro, seletor, deletar }