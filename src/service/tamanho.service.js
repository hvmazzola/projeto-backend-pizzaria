const Tamanho = require("../model/Tamanho");

const findTamanhoByIdService = (id) => {
    return Tamanho.findById(id);
};

const findAllTamanhosService = (limit, offset) => {
    return Tamanho.find().limit(limit).skip(offset);
};

const createTamanhoService = (body) => {
    return Tamanho.create(body);
};

const updateTamanhoService = (id, body) => {
    return Tamanho.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeTamanhoService = (id) => {
    return Tamanho.findByIdAndRemove(id);
};

module.exports = {
    findTamanhoByIdService,
    findAllTamanhosService,
    createTamanhoService,
    updateTamanhoService,
    removeTamanhoService
}