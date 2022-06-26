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

const mudarHidden = (req, res) => {
    Questao.findOne({ _id: req.body.id }).then((questao) => {
        if (questao) {
            questao.hidden = req.params.hidden
            questao.save()
        } else {
            res.send("Não foi possível mudar o elemento escondido desta questão")
        }
    })
}

const mudarDif = (req, res) => {
    Questao.findOne({ _id: req.body.id }).then((questao) => {
        if (questao) {
            questao.dificuldade = req.body.dificuldade
            questao.save()
        } else {
            res.send("Não foi possível mudar a dificuldade desta questão")
        }
    })
}

const pegar = (req, res) => {

    function gerarRandom(min = 1, max = 10) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function pegarDado(dif) {
        let cont = 0

        while (1) {
            let difFinal = dif + cont

            Questao.find({ dificuldade: difFinal }).then((questoes) => {
                if (questoes) {
                    return res.send({ resultado: questoes })
                }
            })

            if (difFinal == 5) {
                cont = 1
                dif = 0
            } else {
                cont = cont + 1
            }
        }
    }

    num = gerarRandom()

    if (num <= 5) {
        pegarDado(1)
    } else if (num <= 20) {
        pegarDado(2)
    } else if (num <= 35) {
        pegarDado(3)
    } else if (num <= 65) {
        pegarDado(4)
    } else if (num <= 100) {
        pegarDado(5)
    }

}

module.exports = { cadastro, deletar, mudarHidden, mudarDif, pegar }