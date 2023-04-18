const Pizza = require("../model/Pizza");

const findPizzaByIdService = (id) => {
    return Pizza.findById(id);
};

const findAllPizzasService = (limit, offset) => {
    return Pizza.find().limit(limit).skip(offset);
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

const addSaborPizzaService = (id, sabor) => {
    return Pizza.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                sabores: {
                    _id: sabor._id,
                    valorAdicional: sabor.valorAdicional,
                },
            },
        },
        {
            rawResult: true,
        }
    );
};

const removeSaborPizzaService = (id, sabor) => {
    return Pizza.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                sabores: {
                    _id: sabor._id,
                    valorAdicional: sabor.valorAdicional,
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
    addSaborPizzaService,
    removeSaborPizzaService
}