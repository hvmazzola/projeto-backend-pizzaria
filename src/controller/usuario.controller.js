const userService = require("../service/usuario.service");


const findUserByIdController = async (req, res) => {
    try{
        const user = await userService.findUserByIdService(req.params.id);

        if(!user){
            return res.status(404).send({ message: "Usuário não encontrado. Tente novamente."});
        }

        return res.status(200).send(user);

    }catch (err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: `ID informado está incorreto. Tente novamente.`});
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
        
    }
};

const findAllUsersController = async (req, res) => {
    try{
        return res.status(200).send(await userService.findAllUsersService());
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const createUserController = async (req, res) => {
    try{
        const body = req.body;

        if((!body.nome) || (!body.email) || (!body.senha)){
            return res.status(400).send ({ message: "Algum campo obrigatório não foi preenchido." })
        }

        return res.status(201).send(await userService.createUserService(body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!" });
    }
};

const updateUserController = async (req, res) => {
    try{
        const body = req.body;

        if((!body.nome) || (!body.email) || (!body.senha) || (!body.admin)){
            return res.status(400).send ({ message: "Algum campo obrigatório não foi preenchido. Tente novamente." })
        }

        return res.status(200).send(await userService.updateUserService(req.params.id, req.body));


    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removeUserController = async (req, res) => {
    try{

        const deletedUser = await userService.removeUserService(req.params.id);

        if(deletedUser == null){
            return res.status(400).send({ message: "Usuário não encontrado. Tente novamente." });
        } else {
            return res.status(200).send({ message: "Sucesso! Usuário deletado." });            
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const addUserAddressController = async (req, res) => {
    try{
        req.body.createdAt = new Date();
        const endereco = await userService.addUserAddressService(req.params.id, req.body);

        if(endereco.value == null){
            return res.status(400).send({ message: "Endereço não adicionado. Tente novamente." });
        } else {
            return res.status(201).send({ message: "Endereço adicionado com sucesso!" });
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removeUserAddressController = async (req, res) => {
    try{
        const endereco = await userService.removeUserAddressService(req.body.id, req.body.addressId);
        let found = false;

        endereco.value.enderecos.map((valor, chave) => {
            if(valor._id == req.body.addressId){
                found = true;
            }
        });

        if(found){
            return res.status(200).send({ message: "Endereço removido com sucesso!" });
        } else {
            return res.status(400).send({ message: "Endereço não removido. Tente novamente." });
        };

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const addUserFavPizzaController = async (req, res) => {
    try{


    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

const removeUserFavPizzaController = async (req, res) => {
    try{


    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Aconteceu um erro inesperado :( Tente novamente!"});
    }
};

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavPizzaController,
    removeUserFavPizzaController    
}