const mongoose = require ("mongoose");
const bcrypt = require ("bcrypt");

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, unique: true, required: true },
    imagem: { type: String },
    enderecos: [
        {
            logradouro: { type: String, required: true },
            numero: { type: Number, required: true },
            bairro: { type: String, required: true },
            cidade: { type: String, required: true },
            uf: { type: String, required: true },
            complemento: { type: String },
            cep: { type: String, required: true },
            createdAt: { type: Date, required: true, default: Date.now() }
        }
    ],
    createdAt: { type: Date, required: true, default: Date.now() },
    pizzas_fav: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "produtos"},
            createdAt: { type: Date, required: true, default: Date.now() }
        }
    ],
    admin: { type: Boolean, required: true, default: false }
});

UsuarioSchema.pre("save", async function(next) {
    if(this.senha){
        this.senha = await bcrypt.hash(this.senha, 10);
    }
    next();
});

UsuarioSchema.pre("findOneAndUpdate", async function(next) {
    if(this._update.senha){
        this._update.senha = await bcrypt.hash(this._update.senha, 10);
    }
    next();
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;