

const findUserByIdController = async (req, res) => {
    try{


    }catch (err){
        res.status(500).send({ message: `Aconteceu um erro inesperado :( Tente novamente!`});
        console.log(`erro: ${err.message}`);
    }
};

const findAllUsersController = async (req, res) => {
    try{


    }catch (err){
        res.status(500).send({ message: `Aconteceu um erro inesperado :( Tente novamente!`});
        console.log(`erro: ${err.message}`);
    }
};

const createUserController = async (req, res) => {
    try{


    }catch (err){
        res.status(500).send({ message: `Aconteceu um erro inesperado :( Tente novamente!`});
        console.log(`erro: ${err.message}`);
    }
};

const updateUserController = async (req, res) => {
    try{


    }catch (err){
        res.status(500).send({ message: `Aconteceu um erro inesperado :( Tente novamente!`});
        console.log(`erro: ${err.message}`);
    }
};

const removeUserController = async (req, res) => {
    try{


    }catch (err){
        res.status(500).send({ message: `Aconteceu um erro inesperado :( Tente novamente!`});
        console.log(`erro: ${err.message}`);
    }
};

const addUserAddressController = async (req, res) => {
    try{


    }catch (err){
        res.status(500).send({ message: `Aconteceu um erro inesperado :( Tente novamente!`});
        console.log(`erro: ${err.message}`);
    }
};

const removeUserAddressController = async (req, res) => {
    try{


    }catch (err){
        res.status(500).send({ message: `Aconteceu um erro inesperado :( Tente novamente!`});
        console.log(`erro: ${err.message}`);
    }
};

const addUserFavPizzaController = async (req, res) => {
    try{


    }catch (err){
        res.status(500).send({ message: `Aconteceu um erro inesperado :( Tente novamente!`});
        console.log(`erro: ${err.message}`);
    }
};

const removeUserFavPizzaController = async (req, res) => {
    try{


    }catch (err){
        res.status(500).send({ message: `Aconteceu um erro inesperado :( Tente novamente!`});
        console.log(`erro: ${err.message}`);
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