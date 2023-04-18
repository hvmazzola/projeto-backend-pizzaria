const saborService = require("../service/sabor.service");


const findSaborByIdController = async (req, res) => {
    try{
        const sabor = await saborService.findSaborByIdService(req.params.id);

        if(!sabor){
            return res.status(404).send({ message: "Sabor não encontrada. Tente novamente."});
        }

        return res.status(200).send(sabor);

    }catch (err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: `ID informado está incorreto. Tente novamente.`});
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
        
    }
};

const findAllSaboresController = async (req, res) => {
    try{
        return res.status(200).send(await saborService.findAllSaboresService(req.query.limit, req.query.offset));
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const createSaborController = async (req, res) => {
    try{
        const body = {
            ...req.body,
            userId: req.userId
        }

        return res.status(201).send(await saborService.createSaborService(body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!" });
    }
};

const updateSaborController = async (req, res) => {
    try{
        
        return res.status(200).send(await saborService.updateSaborService(req.params.id, req.body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removeSaborController = async (req, res) => {
    try{

        const deletedSabor = await saborService.removeSaborService(req.params.id);

        if(deletedSabor == null){
            return res.status(400).send({ message: "Sabor não encontrado. Tente novamente." });
        } else {
            return res.status(200).send({ message: "Sucesso! Sabor deletado." });            
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

module.exports = {
    findSaborByIdController,
    findAllSaboresController,
    createSaborController,
    updateSaborController,
    removeSaborController
}