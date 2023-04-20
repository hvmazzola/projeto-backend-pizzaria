const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectToDatabase = require("./src/database/database"); // arquivo de conexão com o banco
const usuario = require("./src/router/usuario.router"); // arquivo de rotas do usuário
const auth = require("./src/router/auth.router"); // arquivo de rotas de autenticação
const tamanho = require("./src/router/tamanho.router"); // arquivo de rotas dos tamanhos
const sabor = require("./src/router/sabor.router"); // arquivo de rotas dos sabores
const pizza = require("./src/router/pizza.router"); // arquivo de rotas das pizzas
const carrinho = require("./src/router/carrinho.router"); // arquivo de rotas do carrinho
const pedido = require("./src/router/pedido.router"); // arquivo de rotas do pedido
const docs = require("./src/router/docs.router"); // arquivo de rotas do swagger docs



const app = express();

const port = 3000;

app.use(express.json());
app.use(cors(
    {
        origin: [
            "localhost:3001",
            "localhost:3002",
        ],
        methods: [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
        ]
    }
));

connectToDatabase(); // conectanco com o banco

app.use("/usuario", usuario); // chamando rotas do usuário
app.use("/auth", auth); // chamando rotas de autenticação
app.use("/tamanho", tamanho); // chamando rotas dos tamanhos
app.use("/sabor", sabor); // chamando rotas dos sabores
app.use("/pizza", pizza); // chamando rotas das pizzas
app.use("/carrinho", carrinho); // chamando rotas do carrinho
app.use("/pedido", pedido); // chamando rotas do pedido
app.use("/docs", docs); // chamando rotas do swagger docs

app.get ("/", (req, res) => {
    res.send({
        message: "Seja bem-vindo à nossa pizzaria!"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});