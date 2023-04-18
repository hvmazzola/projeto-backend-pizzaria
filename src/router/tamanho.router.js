const express = require("express");
const router = express.Router();
const tamanhoController = require("../controller/tamanho.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaId, validaTamanho } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaId, tamanhoController.findTamanhoByIdController);
router.get("/findall", authMiddleware, paginacao, tamanhoController.findAllTamanhosController);

// rotas post
router.post("/create", authMiddleware, validaTamanho, tamanhoController.createTamanhoController);

// rotas put
router.put("/update/:id", authMiddleware, validaId, validaTamanho, tamanhoController.updateTamanhoController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaId, tamanhoController.removeTamanhoController);

module.exports = router;