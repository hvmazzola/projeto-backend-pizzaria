const mongoose = require ("mongoose");

const PizzaSchema = new mongoose.Schema({
    tamanho: {
        _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "tamanhos"},
        createdAt: { type: Date, required: true, default: Date.now() },
    },
    sabores: [
        { 
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "sabores"},
            valorAdicional: { type: mongoose.Schema.Types.Number, required: true, ref: "sabores"},
            createdAt: { type: Date, required: true, default: Date.now() },
        }
    ],
    temBorda: { type: Boolean, required: true, default: false },
    saborBorda: { type: String, required: true , default: "Sem borda" },
    valorAdicionalBorda: { type: Number, required: true, default: 0 },
    valorTotal: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "usuarios" },
    createdAt: { type: Date, required: true, default: Date.now() },
});

const Pizza = mongoose.model("pizzas", PizzaSchema);

module.exports = Pizza;