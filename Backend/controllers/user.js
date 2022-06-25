const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
require("../models/Usuario")
const User = mongoose.model("Usuario")
const saltsRound = 11
const bcrypt = require("bcrypt")

const registro = (req, res) => {

    User.findOne({ email: req.body.email }).then((userFound) => {
        if (userFound) {
            res.send({ msg: "Email já cadastrado" })

        } else {
            bcrypt.hash(req.body.senha, saltsRound, (err, hash) => {
                if (hash) {
                    const novoDado = {
                        nome: req.body.name,
                        email: req.body.email,
                        senha: hash
                    }

                    new User(novoDado).save()
                        .then(res.send("Usuário registrado com sucesso"))
                        .then(console.log("Usuario registrado"))
                } else {
                    console.log(err)
                }
            })
        }
    }
    )
}

const login = (req, res) => {
    User.findOne({ email: req.body.email }).then((emailFound) => {
        if (emailFound) {
            bcrypt.compare(req.body.senha, emailFound.senha, (err, result) => {
                if (result == true) {
                    res.send("Logado")

                } else {
                    res.send("Senha Incorreta")
                }
            })
        }
        else {
            res.send("Email não encotrado")
        }
    })
}

const alterar = (req, res) => {

    const alterado = req.body.novaSenha

    User.findOne({ email: req.body.email }).then((user) => {
        bcrypt.hash(alterado, saltsRound, (err, hash) => {
            user.senha = hash
            res.send("Senha alterada")
            user.save()
        })
    }
    )
}

module.exports = { registro, login, alterar }