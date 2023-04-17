const mongoose = require ("mongoose");

const SaborSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
    valorAdicional: { type: Number, required: true, default: 0 },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "usuarios" },
    createdAt: { type: Date, required: true, default: Date.now() },
});

const Sabor = mongoose.model("sabores", SaborSchema);

module.exports = Sabor;