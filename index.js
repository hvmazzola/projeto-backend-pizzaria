const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database"); // arquivo de conexão com o banco
const usuario = require("./src/router/usuario.router"); // arquivo de rotas do usuário
const auth = require("./src/router/auth.router"); // arquivo de rotas de autenticação
const tamanho = require("./src/router/tamanho.router"); // arquivo de rotas dos tamanhos
const pizza = require("./src/router/pizza.router"); // arquivo de rotas das pizzas



const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); // conectanco com o banco

app.use("/usuario", usuario); // chamando rotas do usuário
app.use("/auth", auth); // chamando rotas de autenticação
app.use("/tamanho", tamanho); // chamando rotas dos tamanhos
app.use("/pizza", pizza); // chamando rotas das pizzas

app.get ("/", (req, res) => {
    res.send({
        message: "Seja bem-vindo à nossa pizzaria!"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});