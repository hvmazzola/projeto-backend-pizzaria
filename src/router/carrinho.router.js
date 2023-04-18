const express = require("express");
const router = express.Router();
const carrinhoController = require("../controller/carrinho.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaIdParams, validaCarrinho, validaPizzasCarrinhoPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaIdParams, carrinhoController.findCarrinhoByIdController);
router.get("/findall", authMiddleware, paginacao, carrinhoController.findAllCarrinhosController);

// rotas post
router.post("/create", authMiddleware, validaPizzasCarrinhoPedido, validaCarrinho, carrinhoController.createCarrinhoController);

// rotas put
router.put("/update/:id", authMiddleware, validaIdParams, validaCarrinho, carrinhoController.updateCarrinhoController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaIdParams, carrinhoController.removeCarrinhoController);

module.exports = router;