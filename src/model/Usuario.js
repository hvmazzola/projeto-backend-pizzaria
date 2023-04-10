const mongoose = require ("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, unique: true, required: true },
    imagem: { type: String },
    endereços: [
        {
            logradouro: { type: String, required: true },
            numero: { type: Number, required: true },
            bairro: { type: String, required: true },
            cidade: { type: String, required: true },
            uf: { type: String, required: true },
            complemento: { type: String },
            cep: { type: String, required: true },
            createdAt: { type: Date, required: true }
        }
    ],
    createdAt: { type: Date, required: true },
    pizzas_fav: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "produtos"},
            createdAt: { type: Date, required: true }
        }
    ],
    admin: { type: Boolean, required: true, default: false }
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;