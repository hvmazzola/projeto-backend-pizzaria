const objectId = require("mongoose").Types.ObjectId;

const validaUsuario = (req, res, next) => {
    let erros = [];

    if(req.body.nome == null){
        erros.push("nome");
    }

    if(req.body.email == null){
        erros.push("email");
    }

    if(req.body.senha == null){
        erros.push("senha");
    }

    if(erros.length == 0) {
        return next();
    } else if(erros.length == 1) {
        return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido. Tente novamente!`});
    } else {
        return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos. Tente novamente!`});
    };
};

const validaPizza = (req, res, next) => {
    let erros = [];

    if(req.body.valorTotal == null){
        erros.push("valorTotal");
    }

    if(req.body.tamanho._id == null){
        erros.push("tamanho._id");
    }

    if(erros.length == 0) {
        return next();
    } else if(erros.length == 1) {
        return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido. Tente novamente!`});
    } else {
        return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos. Tente novamente!`});
    };
};

const validaTamanho = (req, res, next) => {
    let erros = [];

    if(req.body.nome == null){
        erros.push("nome");
    }

    if(req.body.diametro == null){
        erros.push("diametro");
    }

    if(req.body.qntSabores == null){
        erros.push("qntSabores");
    }
    
    if(req.body.valorBase == undefined){
        erros.push("valorBase");
    }

    if(req.body.bordaGratuita == null){
        erros.push("bordaGratuita");
    }

    if(erros.length == 0) {
        return next();
    } else if(erros.length == 1) {
        return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido. Tente novamente!`});
    } else {
        return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos. Tente novamente!`});
    };
};

const validaSabor = (req, res, next) => {
    let erros = [];

    if(req.body.nome == null){
        erros.push("nome");
    }

    if(req.body.valorAdicional == null){
        erros.push("valorAdicional");
    }

    if(erros.length == 0) {
        return next();
    } else if(erros.length == 1) {
        return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido. Tente novamente!`});
    } else {
        return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos. Tente novamente!`});
    };
};

const validaPedido = (req, res, next) => {

    if(req.body.pizzas == null){
        return res.status(400).send({ message: `Não é possível criar um pedido sem pizzas. Tente novamente!`});;
    }

    if(req.body.precoTotal == null){
        return res.status(400).send({ message: `O campo "precoTotal" precisa ser preenchido. Tente novamente!`});
    }
    
    return next();
    
};

const validaCarrinho = (req, res, next) => {

    if(req.body.precoTota == null){
        return res.status(400).send({ message: `O campo "precoTotal" precisa ser preenchido. Tente novamente!`});
    }
    
    return next();
    
};

const validaId = (req, res, next) => {

    if(objectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID que foi passado não corresponde aos podrões necessários. Tente novamente!`});
    }
    
    
    
};

module.exports = {
    validaUsuario,
    validaPizza,
    validaTamanho,
    validaSabor,
    validaPedido,
    validaCarrinho,
    validaId
};