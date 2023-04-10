const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

// rotas get
router.get("/findById/:id", usuarioController.findUserByIdController);
router.get("/findall", usuarioController.findAllUsersController);

// rotas post
router.post("/create", usuarioController.createUserController);
router.post("/addAddress/:id", usuarioController.addUserAddressController);
router.post("/addFavPizza/:id", usuarioController.addUserFavPizzaController);

// rotas put
router.put("/update/:id", usuarioController.updateUserController);

// rotas delete
router.delete("/remove/:id", usuarioController.removeUserController);
router.delete("/removeAddress", usuarioController.removeUserAddressController);
router.delete("/removeFavPizza", usuarioController.removeUserFavPizzaController);

module.exports = router;