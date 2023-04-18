const express = require("express");
const router = express.Router();
const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaId, validaPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaId, pedidoController.findPedidoByIdController);
router.get("/findall", authMiddleware, paginacao, pedidoController.findAllPedidosController);

// rotas post
router.post("/create", authMiddleware, validaPedido, pedidoController.createPedidoController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaId, pedidoController.removePedidoController);

// rotas patch
router.patch("/updateStatus/:id", authMiddleware, validaId, pedidoController.updateStatusPedidoController);
router.patch("/cancelStatus/:id", authMiddleware, validaId, pedidoController.cancelStatusPedidoController);

module.exports = router;