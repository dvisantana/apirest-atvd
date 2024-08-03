const express = require('express')
const router = express.Router()

const Auth = require('../helpers/Auth')
const MusicaModel = require('../model/Musica')

router.get('/', (req, res) => {
    let list = MusicaModel.list()
    if (req.query.nome) {
        list = MusicaModel.listByName(req.query.nome)
    } else if (req.query.artista) {
        list = MusicaModel.listByArtista(req.query.artista)
    }
    
    res.json({count: list.length, lista: list})
})

router.get('/:id', (req, res) => {
    let obj = MusicaModel.getElementById(req.params.id)
    if (obj) {
        res.json({obj: obj})
    } else {
        res.status(404).json({mensagem: "O ID informado não é válido"})
    }
})

router.post('/', Auth.validaAcesso, (req, res) => {
    let {nome, artista, genero} = req.body
    if (nome && artista && genero) {
        let obj = MusicaModel.save(nome, artista, genero)
        res.json({obj: obj})
    } else {
        res.status(400).json({mensagem: "Falha ao registrar uma nova musica"})
    }
})

router.put('/:id', Auth.validaAcesso, (req, res) => {
    let {nome, artista, genero} = req.body
    let id = req.params.id
    if (id && nome && artista && genero) {
        let obj = MusicaModel.update(id, nome, artista, genero)
        if (obj) {
            res.json({obj: obj})
        } else {
            res.status(400).json({mensagem: "O ID informado não foi encontrado"})
        }
    } else {
        res.status(400).json({mensagem: "Falha ao alterar o novo registro de musica"})
    }
})

router.delete('/:id', Auth.validaAcesso, (req, res) => {
    let id = req.params.id
    if (MusicaModel.delete(id)) {
        res.json({"mensagem": "Musica excluida com sucesso"})
    } else {
        res.status(400).json({mensgaem: "Falha ao excluir o registro de musica"})
    }
})

module.exports = router