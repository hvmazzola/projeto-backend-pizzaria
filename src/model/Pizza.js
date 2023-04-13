const mongoose = require ("mongoose");

const PizzaSchema = new mongoose.Schema({
    tamanho: [
        { 
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "tamanhos"},
        }
    ],
    sabores: [
        { 
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "sabores"},
        }
    ],
    temBorda: { type: Boolean, required: true, default: false },
    saborBorda: { type: String, required: true , default: "Sem borda" },
    valorAdicionalBorda: { type: Number, required: true, default: 0 },
    valorTotal: { type: Number, required: true },
});

const Pizza = mongoose.model("pizzas", PizzaSchema);

module.exports = Pizza;