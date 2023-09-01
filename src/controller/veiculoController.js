import { Deletar, inserir, listarTodos} from  '../repository/veiculoRepository.js';
import {Router} from 'express';
const server=  Router()

server.post(('/veiculo')  , async (req, resp) => {
    try {
        let x=req.body;
        let dados= await inserir (x) 
        resp.send(dados)
    } catch (err) {
        resp.send(404).send({erro:err.message})
    }
})

server.get(('/veiculo'), async (req, resp) => {
    try {
        const resposta = await listarTodos();
        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({erro:err.message})
    }
})

server.delete(('/veiculo/:id') , async (req,resp) =>{
    try {
        let id = req.params.id;
        let x = await Deletar(id);
        resp.send() 
    } catch (err) {
        resp.send(404).send({erro:err.message})
    }
})

export default server