const mongoose = require ("mongoose");

const TamanhoSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
    diametro: { type: Number, unique: true, required: true },
    qntSabores: { type: Number, required: true },
    valorBase: { type: Number, unique: true, required: true },
    bordaGratuita: { type: Boolean, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "usuarios" },
    createdAt: { type: Date, required: true, default: Date.now() },
});

const Tamanho = mongoose.model("tamanhos", TamanhoSchema);

module.exports = Tamanho;