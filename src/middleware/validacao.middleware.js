const validaUsuario = (req, res, next) => {
    let erros = [];

    if(!req.body.nome){
        erros.push("nome");
    }

    if(!req.body.email){
        erros.push("email");
    }

    if(!req.body.senha){
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

    if(!req.body.valorTotal){
        erros.push("valorTotal");
    }

    if(!req.body.tamanho._id){
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

    if(!req.body.nome){
        erros.push("nome");
    }

    if(!req.body.diametro){
        erros.push("diametro");
    }

    if(!req.body.qntSabores){
        erros.push("qntSabores");
    }
    
    if(!req.body.valorBase){
        erros.push("valorBase");
    }

    if(!req.body.bordaGratuita){
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

    if(!req.body.nome){
        erros.push("nome");
    }

    if(!req.body.valorAdicional){
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

module.exports = {
    validaUsuario,
    validaPizza,
    validaTamanho,
    validaSabor
};