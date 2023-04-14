const validaUsuario = (req, res, next) => {

    if((!req.body.nome) || (!req.body.email) || (!req.body.senha)){
        return res.status(400).send ({ message: "Algum campo obrigatório não foi preenchido." })
    }

    return next();
};

module.exports = validaUsuario;