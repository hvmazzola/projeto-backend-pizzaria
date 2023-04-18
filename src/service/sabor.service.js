const Sabor = require("../model/Sabor");

const findSaborByIdService = (id) => {
    return Sabor.findById(id);
};

const findAllSaboresService = (limit, offset) => {
    return Sabor.find().limit(limit).skip(offset);
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