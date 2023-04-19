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

const validaEndereco = (req, res, next) => {
    let erros = [];

    req.body.map((value, key) => {
        if(value.logradouro == null){
            erros.push(`'${key+1} - logradouro'`);
        }

        if(value.numero == null){
            erros.push(`'${key+1} - numero'`);
        }
    
        if(value.bairro == null){
            erros.push(`'${key+1} - bairro'`);
        }
    
        if(value.cidade == null){
            erros.push(`'${key+1} - cidade'`);
        }

        if(value.uf == null){
            erros.push(`'${key+1} - uf'`);
        }

        if(value.cep == null){
            erros.push(`'${key+1} - cep'`);
        }
    });

    

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

const validaSaboresPizza = (req, res, next) => {

    if(req.body._id == null){
        return res.status(400).send({ message: "O campo '_id' precisa ser preenchido. Tente novamente!"});
    }
    
    return next();
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

    if(req.body.precoTotal == null){
        return res.status(400).send({ message: "O campo 'precoTotal' precisa ser preenchido. Tente novamente!"});
    }
    
    return next();
};

const validaAddPedido = (req, res, next) => {

    if(req.body._id == null){
        return res.status(400).send({ message: "O campo '_id' precisa ser preenchido. Tente novamente!"});
    }
    
    return next();
    
};

const validaAddPizza = (req, res, next) => {

    if(req.body._id == null){
        return res.status(400).send({ message: "O campo '_id' precisa ser preenchido. Tente novamente!"});
    }
    
    return next();
    
};

const validaIdParams = (req, res, next) => {
    if(objectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID que foi passado não corresponde aos podrões necessários. Tente novamente!`});
    }    
};

const validaIdBody = (req, res, next) => {

    if(objectId.isValid(req.body._id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID que foi passado não corresponde aos padrões necessários. Tente novamente!`});
    }    
};

const validaLogin = (req, res, next) => {

    let erros = [];

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

const validaPizzasCarrinhoPedido = (req, res, next) => {
    let erros = [];

    req.body.pizzas.map((value, key) => {
        if(value._id == null){
            erros.push(`'${key+1} - ID'`);
        }

        if(!objectId.isValid(value._id)){
            erros.push(`'${key+1} - ID - Tipo inválido'`);
        }

        if(value.qnt == null){
            erros.push(`'${key+1} - quantidade'`);
        }

        if(erros.length == 0) {
            return next();
        } else if(erros.length == 1) {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido. Tente novamente!`});
        } else {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos. Tente novamente!`});
        };
    });

    

    if(erros.length == 0) {
        return next();
    } else if(erros.length == 1) {
        return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido. Tente novamente!`});
    } else {
        return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos. Tente novamente!`});
    };
};

module.exports = {
    validaUsuario,
    validaEndereco,
    validaPizza,
    validaSaboresPizza,
    validaTamanho,
    validaSabor,
    validaPedido,
    validaCarrinho,
    validaAddPedido,
    validaAddPizza,
    validaIdParams,
    validaIdBody,
    validaLogin,
    validaPizzasCarrinhoPedido
};