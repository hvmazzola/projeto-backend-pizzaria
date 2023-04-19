const Carrinho = require("../model/Carrinho");

const findCarrinhoByIdService = (id) => {
    return Carrinho.findById(id);
};

const findAllCarrinhosService = (limit, offset) => {
    return Carrinho.find().limit(limit).skip(offset);
};

const createCarrinhoService = (body) => {
    return Carrinho.create(body);
};

const updateCarrinhoService = (id, body) => {
    return Carrinho.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeCarrinhoService = (id) => {
    return Carrinho.findByIdAndRemove(id);
};

const addPizzaCarrinhoService = (id, pizza) => {
    return Carrinho.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                pizzas:{
                    _id: pizza._id,
                    qnt: pizza.qnt,
                },
            },
        },
        {
            rawResult: true,
        }
    );
};

const removePizzaCarrinhoService = (id, sabor) => {
    return Carrinho.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                pizzas:{
                    _id: pizza._id,
                    qnt: pizza.qnt,
                },
            },
        },
        {
            rawResult: true,
        }
    );
};

module.exports = {
    findCarrinhoByIdService,
    findAllCarrinhosService,
    createCarrinhoService,
    updateCarrinhoService,
    removeCarrinhoService,
    addPizzaCarrinhoService,
    removePizzaCarrinhoService
}