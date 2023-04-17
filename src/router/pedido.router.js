const express = require("express");
const router = express.Router();
const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaPedido } = require("../middleware/validacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, pedidoController.findPedidoByIdController);
router.get("/findall", authMiddleware, pedidoController.findAllPedidosController);

// rotas post
router.post("/create", authMiddleware, validaPedido, pedidoController.createPedidoController);

// rotas delete
router.delete("/remove/:id", authMiddleware, pedidoController.removePedidoController);

// rotas patch
router.patch("/updateStatus/:id", authMiddleware, pedidoController.updateStatusPedidoController);
router.patch("/cancelStatus/:id", authMiddleware, pedidoController.cancelStatusPedidoController);

module.exports = router;