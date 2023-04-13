const Pizza = require("../model/Pizza");

const findPizzaByIdService = (id) => {
    return Pizza.findById(id);
};

const findAllPizzasService = () => {
    return Pizza.find();
};

const createPizzaService = (body) => {
    return Pizza.create(body);
};

const updatePizzaService = (id, body) => {
    return Pizza.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removePizzaService = (id) => {
    return Pizza.findByIdAndRemove(id);
};

const addTamanhoPizzaService = (id, tamanho) => {
    return Pizza.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                tamanho: {
                    _id: tamanho._id,
                    createdAt: tamanho.createdAt
                },
            },
        },
        {
            rawResult: true,
        }
    );
};

const removeTamanhoPizzaService = (id, tamanho) => {
    return Pizza.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                tamanho: {
                    _id: tamanho._id,
                },
            },
        },
        {
            rawResult: true,
        }
    );
};

module.exports = {
    findPizzaByIdService,
    findAllPizzasService,
    createPizzaService,
    updatePizzaService,
    removePizzaService,
    addTamanhoPizzaService,
    removeTamanhoPizzaService
}