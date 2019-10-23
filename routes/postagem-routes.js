const express = require('express');
const router = express.Router();
const PostagemController = require('../controllers/postagens');
const PostagemModel = require('../models/postagem');

const postagemController = new PostagemController(PostagemModel);

router.get('/', async(req, res)=>{
    const postagens = await postagemController.consultarTodos();
    res.send(postagens)
});

router.post('/', async(req, res)=>{
    const novaPostagem = req.body;
    const retorno = await postagemController.adicionar(novaPostagem);
    res.send(retorno)
});

router.put('/:id', async(req,res)=>{
const id = req.params.id;
const postagemDTO = req.body;
await postagemController.alterarPorId(id, postagemDTO)
res.send('alterado com sucesso')
})

module.exports = router;
