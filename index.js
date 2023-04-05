const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.get ("/", (req, res) => {
    res.send({
        message: "Seja bem-vindo à nossa pizzaria!"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});