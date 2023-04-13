const mongoose = require ("mongoose");

const CarrinhoSchema = new mongoose.Schema({
    pizzas: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "pizzas"},
            qnt: { type: Number, required: true, default: 1 }
        },
    ],
    createdAt: { type: Date, required: true, default: Date.now() },
    precoTotal: { type: Number, required: true},
    frete: { type: Number, required: true, default: 0},
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "usuarios"},
});

const Carrinho = mongoose.model("carrinhos", CarrinhoSchema);

module.exports = Carrinho;