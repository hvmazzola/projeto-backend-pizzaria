const express = require("express");
const router = express.Router();
const carrinhoController = require("../controller/carrinho.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaCarrinho } = require("../middleware/validacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, carrinhoController.findCarrinhoByIdController);
router.get("/findall", authMiddleware, carrinhoController.findAllCarrinhosController);

// rotas post
router.post("/create", authMiddleware, validaCarrinho, carrinhoController.createCarrinhoController);

// rotas put
router.put("/update/:id", authMiddleware, validaCarrinho, carrinhoController.updateCarrinhoController);

// rotas delete
router.delete("/remove/:id", authMiddleware, carrinhoController.removeCarrinhoController);

module.exports = router;