const carrinhoService = require("../service/carrinho.service");
const pizzaService = require("../service/pizza.service");


const findCarrinhoByIdController = async (req, res) => {
    try{
        const carrinho = await carrinhoService.findCarrinhoByIdService(req.params.id);

        if(!carrinho){
            return res.status(404).send({ message: "Carrinho não encontrado. Tente novamente."});
        }

        return res.status(200).send(carrinho);

    }catch (err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: `ID informado está incorreto. Tente novamente.`});
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
        
    }
};

const findAllCarrinhosController = async (req, res) => {
    try{
        return res.status(200).send(await carrinhoService.findAllCarrinhosService(req.query.limit, req.query.offset));
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const createCarrinhoController = async (req, res) => {
    try{
        const body = {
            ...req.body,
            userId: req.userId
        }

        return res.status(201).send(await carrinhoService.createCarrinhoService(body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!" });
    }
};

const updateCarrinhoController = async (req, res) => {
    try{
        const carrinho = await carrinhoService.findCarrinhoByIdService(req.params.id);

        if(!carrinho){
            return res.status(404).send({ message: "Carrinho não encontrado. Tente novamente."});
        }
        
        return res.status(200).send(await carrinhoService.updateCarrinhoService(req.params.id, req.body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removeCarrinhoController = async (req, res) => {
    try{

        const deletedCarrinho = await carrinhoService.removeCarrinhoService(req.params.id);

        if(deletedCarrinho == null){
            return res.status(400).send({ message: "Carrinho não encontrado. Tente novamente." });
        } else {
            return res.status(200).send({ message: "Sucesso! Carrinho deletado." });            
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const addPizzaCarrinhoController = async (req, res) => {
    try{
        const carrinho = await carrinhoService.findCarrinhoByIdService(req.params.id);

        if(!carrinho){
            return res.status(404).send({ message: "Carrinho não encontrado. Tente novamente."});
        }

        let pizza = await pizzaService.findPizzaByIdService(req.body._id);

        if(!pizza){
            return res.status(404).send({ message: "Pizza não encontrada. Tente novamente."});
        }

        pizza = await carrinhoService.addPizzaCarrinhoService(req.params.id, req.body);

        return res.status(200).send({ message: "Pizza adicionada com sucesso!" });

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removePizzaCarrinhoController = async (req, res) => {
    try{
        const carrinho = await carrinhoService.findCarrinhoByIdService(req.params.id);

        if(!carrinho){
            return res.status(404).send({ message: "Carrinho não encontrada. Tente novamente."});
        }

        const pizza = await carrinhoService.removePizzaCarrinhoService(req.params.id, req.body);

        let found = false;

        pizza.value.pizzas.map((valor, chave) => {
            if(valor._id == req.body._id){
                found = true;
            }
        });

        if(found){
            return res.status(200).send({ message: "Pizza removida com sucesso!" });
        } else {
            return res.status(400).send({ message: "Pizza não encontrada. Tente novamente." });
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

module.exports = {
    findCarrinhoByIdController,
    findAllCarrinhosController,
    createCarrinhoController,
    updateCarrinhoController,
    removeCarrinhoController,
    addPizzaCarrinhoController,
    removePizzaCarrinhoController
}