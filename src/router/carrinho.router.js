const express = require("express");
const router = express.Router();
const carrinhoController = require("../controller/carrinho.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaId, validaCarrinho } = require("../middleware/validacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaId, carrinhoController.findCarrinhoByIdController);
router.get("/findall", authMiddleware, carrinhoController.findAllCarrinhosController);

// rotas post
router.post("/create", authMiddleware, validaCarrinho, carrinhoController.createCarrinhoController);

// rotas put
router.put("/update/:id", authMiddleware, validaId, validaCarrinho, carrinhoController.updateCarrinhoController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaId, carrinhoController.removeCarrinhoController);

module.exports = router;