const tamanhoService = require("../service/tamanho.service");


const findTamanhoByIdController = async (req, res) => {
    try{
        const tamanho = await tamanhoService.findTamanhoByIdService(req.params.id);

        if(!tamanho){
            return res.status(404).send({ message: "Tamanho não encontrada. Tente novamente."});
        }

        return res.status(200).send(tamanho);

    }catch (err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: `ID informado está incorreto. Tente novamente.`});
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
        
    }
};

const findAllTamanhosController = async (req, res) => {
    try{
        return res.status(200).send(await tamanhoService.findAllTamanhosService(req.query.limit, req.query.offset));
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const createTamanhoController = async (req, res) => {
    try{
        const body = {
            ...req.body,
            userId: req.userId
        }

        return res.status(201).send(await tamanhoService.createTamanhoService(body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!" });
    }
};

const updateTamanhoController = async (req, res) => {
    try{
        
        return res.status(200).send(await tamanhoService.updateTamanhoService(req.params.id, req.body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removeTamanhoController = async (req, res) => {
    try{

        const deletedTamanho = await tamanhoService.removeTamanhoService(req.params.id);

        if(deletedTamanho == null){
            return res.status(400).send({ message: "Tamanho não encontrado. Tente novamente." });
        } else {
            return res.status(200).send({ message: "Sucesso! Tamanho deletado." });            
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

module.exports = {
    findTamanhoByIdController,
    findAllTamanhosController,
    createTamanhoController,
    updateTamanhoController,
    removeTamanhoController
}