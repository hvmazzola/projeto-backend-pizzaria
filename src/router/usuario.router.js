const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaIdParams, validaIdBody, validaUsuario, validaEndereco, validaAddPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaIdParams, usuarioController.findUserByIdController);
router.get("/findall", authMiddleware, paginacao, usuarioController.findAllUsersController);

// rotas post
router.post("/create", validaUsuario, usuarioController.createUserController);
router.post("/addAddress/:id", authMiddleware, validaIdParams, validaEndereco, usuarioController.addUserAddressController);
router.post("/addPedidoPizza/:id", authMiddleware, validaIdParams, validaAddPedido, validaIdBody, usuarioController.addUserPedidoController);

// rotas put
router.put("/update/:id", authMiddleware, validaIdParams, validaUsuario, usuarioController.updateUserController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaIdParams, usuarioController.removeUserController);
router.delete("/removeAddress/:id", authMiddleware, validaIdParams, usuarioController.removeUserAddressController);

module.exports = router;