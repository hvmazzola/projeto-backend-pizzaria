const mongoose = require ("mongoose");

const PedidoSchema = new mongoose.Schema({
    pizzas: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzas"},
            qnt: { type: Number, required: true, default: 1 },
            createdAt: { type: Date, required: true, default: Date.now() },
        },
    ],
    precoTotal: { type: Number, required: true},
    frete: { type: Number, required: true, default: 0},
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "usuarios" },
    createdAt: { type: Date, required: true, default: Date.now() },
    status: { type: String, required: true, default: "Processando"}
});

const Pedido = mongoose.model("pedidos", PedidoSchema);

module.exports = Pedido;