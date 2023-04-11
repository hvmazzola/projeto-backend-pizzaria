const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const authMiddleware = require("../middleware/auth.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, usuarioController.findUserByIdController);
router.get("/findall", authMiddleware, usuarioController.findAllUsersController);

// rotas post
router.post("/create", usuarioController.createUserController);
router.post("/addAddress/:id", authMiddleware, usuarioController.addUserAddressController);
router.post("/addFavPizza/:id", authMiddleware, usuarioController.addUserFavPizzaController);

// rotas put
router.put("/update/:id", authMiddleware, usuarioController.updateUserController);

// rotas delete
router.delete("/remove/:id", authMiddleware, usuarioController.removeUserController);
router.delete("/removeAddress", authMiddleware, usuarioController.removeUserAddressController);
router.delete("/removeFavPizza", authMiddleware, usuarioController.removeUserFavPizzaController);

module.exports = router;