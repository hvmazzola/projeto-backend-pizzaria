const express = require("express");carrinho
const router = express.Router();
const carrinhoController = require("../controller/carrinho.controller");
const authMiddleware = require("../middleware/auth.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, carrinhoController.findCarrinhoByIdController);
router.get("/findall", authMiddleware, carrinhoController.findAllCarrinhosController);

// rotas post
router.post("/create", authMiddleware, carrinhoController.createCarrinhoController);

// rotas put
router.put("/update/:id", authMiddleware, carrinhoController.updateCarrinhoController);

// rotas delete
router.delete("/remove/:id", authMiddleware, carrinhoController.removeCarrinhoController);

module.exports = router;