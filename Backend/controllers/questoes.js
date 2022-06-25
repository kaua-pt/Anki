const mongoose = require("mongoose")
require("../models/Questao")
const Questao = mongoose.model("questao")


const cadastro = (req, res) => {
    const questao = {
        descricao: req.body.descricao,
        hidden: req.body.hidden,
        tipo: req.body.tipo,
        dificuldade: req.body.dificuldade
    }

    new Questao(questao).save()
        .then(res.send("Questão cadastada com sucesso."))
}

const deletar = (req, res) => {
    Questao.deleteOne({ _id: req.params._id }).then((msg) => {
        if (msg.deletedCount > 0) {
            res.send("Questão apagada com sucesso")
        } else {
            res.send("Não foi possível apagar esta questão")
        }
    })
}

module.exports = { cadastro, deletar }