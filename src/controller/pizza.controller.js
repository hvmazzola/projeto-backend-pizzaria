const pizzaService = require("../service/pizza.service");


const findPizzaByIdController = async (req, res) => {
    try{
        const pizza = await pizzaService.findPizzaByIdService(req.params.id);

        if(!pizza){
            return res.status(404).send({ message: "Pizza não encontrada. Tente novamente."});
        }

        return res.status(200).send(pizza);

    }catch (err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: `ID informado está incorreto. Tente novamente.`});
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
        
    }
};

const findAllPizzasController = async (req, res) => {
    try{
        return res.status(200).send(await pizzaService.findAllPizzasService());
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const createPizzaController = async (req, res) => {
    try{
        const body = {
            ...req.body,
            userId: req.userId
        }

        return res.status(201).send(await pizzaService.createPizzaService(body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!" });
    }
};

const updatePizzaController = async (req, res) => {
    try{

        return res.status(200).send(await pizzaService.updatePizzaService(req.params.id, req.body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removePizzaController = async (req, res) => {
    try{

        const deletedPizza = await pizzaService.removePizzaService(req.params.id);

        if(deletedPizza == null){
            return res.status(400).send({ message: "Usuário não encontrado. Tente novamente." });
        } else {
            return res.status(200).send({ message: "Sucesso! Usuário deletado." });            
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const addTamanhoPizzaController = async (req, res) => {
    try{
        const tamanho = await pizzaService.addTamanhoPizzaService(req.params.id, req.body);
        return res.status(201).send(tamanho);

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removeTamanhoPizzaController = async (req, res) => {
    try{
        const tamanho = await pizzaService.removeTamanhoPizzaService(req.params.id, req.body);
        return res.status(200).send(tamanho);

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

module.exports = {
    findPizzaByIdController,
    findAllPizzasController,
    createPizzaController,
    updatePizzaController,
    removePizzaController,
    addTamanhoPizzaController,
    removeTamanhoPizzaController
}