const express = require("express");
const router = express.Router();
const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaIdParams, validaPedido, validaPizzasCarrinhoPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaIdParams, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, paginacao, pedidoController.findAllPedidosController);

// rotas post
router.post("/create", authMiddleware, validaPizzasCarrinhoPedido, validaPedido, pedidoController.createPedidoController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaIdParams, pedidoController.removePedidoController);

// rotas patch
router.patch("/updateStatus/:id", authMiddleware, validaIdParams, pedidoController.updateStatusPedidoController);
router.patch("/cancelStatus/:id", authMiddleware, validaIdParams, pedidoController.cancelStatusPedidoController);

module.exports = router;