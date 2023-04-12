const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database"); // arquivo de conexão com o banco
const usuario = require("./src/router/usuario.router"); // arquivo de rotas do usuário
const auth = require("./src/router/auth.router"); // arquivo de rotas de autenticação


const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); // conectanco com o banco

app.use("/usuario", usuario); // chamando rotas do usuário
app.use("/auth", auth); // chamando rotas de autenticação

app.get ("/", (req, res) => {
    res.send({
        message: "Seja bem-vindo à nossa pizzaria!"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});