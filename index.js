const express = require("express");
const connectToDatabase = require("./src/database/database"); // arquivo de conexão com o banco
const usuario = require("./src/router/usuario.router"); // arquivo de rotas do usuário

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); // conectanco com o banco

app.use("/usuario", usuario); // chamando rotas do usuário

app.get ("/", (req, res) => {
    res.send({
        message: "Seja bem-vindo à nossa pizzaria!"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});