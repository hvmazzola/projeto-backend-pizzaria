const pedidoService = require("../service/pedido.service");


const findPedidoByIdController = async (req, res) => {
    try{
        const pedido = await pedidoService.findPedidoByIdService(req.params.id);

        if(!pedido){
            return res.status(404).send({ message: "Pedido não encontrado. Tente novamente."});
        }

        return res.status(200).send(pedido);

    }catch (err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: `ID informado está incorreto. Tente novamente.`});
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
        
    }
};

const findAllPedidosController = async (req, res) => {
    try{
        return res.status(200).send(await pedidoService.findAllPedidosService());
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const createPedidoController = async (req, res) => {
    try{
        const body = {
            ...req.body,
            userId: req.userId
        }

        return res.status(201).send(await pedidoService.createPedidoService(body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!" });
    }
};

const removePedidoController = async (req, res) => {
    try{

        const deletedPedido = await pedidoService.removePedidoService(req.params.id);

        if(deletedPedido == null){
            return res.status(400).send({ message: "Pedido não encontrado. Tente novamente." });
        } else {
            return res.status(200).send({ message: "Sucesso! Pedido deletado." });            
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const updateStatusPedidoController = async (req, res) => {
    try{
        return res.status(200).send(await pedidoService.updateStatusPedidoService(req.params.id));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const cancelStatusPedidoController = async (req, res) => {
    try{
        return res.status(200).send(await pedidoService.cancelStatusPedidoService(req.params.id));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

module.exports = {
    findPedidoByIdController,
    findAllPedidosController,
    createPedidoController,
    removePedidoController,
    updateStatusPedidoController,
    cancelStatusPedidoController
}