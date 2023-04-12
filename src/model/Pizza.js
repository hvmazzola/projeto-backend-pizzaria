const mongoose = require ("mongoose");

const PizzaSchema = new mongoose.Schema({
    tamanho: [
        { 
            _id: { type: String, required: true },
            createdAt: { type: Date, required: true, default: Date.now() }
        }
    ],
    sabores: [
        { 
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "sabores"},
            createdAt: { type: Date, required: true, default: Date.now() }
        }
    ],
    temBorda: { type: Boolean, required: true },
    saborBorda: { type: String, required: true , default: "Sem borda" },
    valorAdicionalBorda: { type: Number, required: true, default: 0 },
    valorTotal: { type: Number, required: true },
});

const Pizza = mongoose.model("pizzas", PizzaSchema);

module.exports = Pizza;