const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaId, validaUsuario } = require("../middleware/validacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaId, usuarioController.findUserByIdController);
router.get("/findall", authMiddleware, usuarioController.findAllUsersController);

// rotas post
router.post("/create", validaUsuario, usuarioController.createUserController);
router.post("/addAddress/:id", authMiddleware, validaId, usuarioController.addUserAddressController);
router.post("/addPedidoPizza/:id", authMiddleware, validaId, usuarioController.addUserPedidoController);

// rotas put
router.put("/update/:id", authMiddleware, validaId, validaUsuario, usuarioController.updateUserController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaId, usuarioController.removeUserController);
router.delete("/removeAddress/:id", authMiddleware, validaId, usuarioController.removeUserAddressController);

module.exports = router;