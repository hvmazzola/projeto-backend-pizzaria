const Sabor = require("../model/Sabor");

const findSaborByIdService = (id) => {
    return Sabor.findById(id);
};

const findAllSaboresService = () => {
    return Sabor.find();
};

const createSaborService = (body) => {
    return Sabor.create(body);
};

const updateSaborService = (id, body) => {
    return Sabor.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeSaborService = (id) => {
    return Sabor.findByIdAndRemove(id);
};

module.exports = {
    findSaborByIdService,
    findAllSaboresService,
    createSaborService,
    updateSaborService,
    removeSaborService
}