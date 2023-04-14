const Pedido = require("../model/Pedido");

const findPedidoByIdService = (id) => {
    return Pedido.findById(id);
};

const findAllPedidosService = () => {
    return Pedido.find();
};

const createPedidoService = (body) => {
    return Pedido.create(body);
};

const removePedidoService = (id) => {
    return Pedido.findByIdAndRemove(id);
};

const updateStatusPedidoService = (id) => {
    return Pedido.findByIdAndUpdate({ _id: id}, { $set: { status: "Finalizado" } });
};

const cancelStatusPedidoService = (id) => {
    return Pedido.findByIdAndUpdate({ _id: id}, { $set: { status: "Cancelado" } });
};

module.exports = {
    findPedidoByIdService,
    findAllPedidosService,
    createPedidoService,
    removePedidoService,
    updateStatusPedidoService,
    cancelStatusPedidoService
}