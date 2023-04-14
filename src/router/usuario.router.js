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
router.post("/addPedidoPizza/:id", authMiddleware, usuarioController.addUserPedidoController);

// rotas put
router.put("/update/:id", authMiddleware, usuarioController.updateUserController);

// rotas delete
router.delete("/remove/:id", authMiddleware, usuarioController.removeUserController);
router.delete("/removeAddress/:id", authMiddleware, usuarioController.removeUserAddressController);

module.exports = router;