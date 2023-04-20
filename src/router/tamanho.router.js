const express = require("express");
const router = express.Router();
const tamanhoController = require("../controller/tamanho.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaIdParams, validaTamanho } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaIdParams, tamanhoController.findTamanhoByIdController);
router.get("/findAll", authMiddleware, paginacao, tamanhoController.findAllTamanhosController);

// rotas post
router.post("/create", authMiddleware, validaTamanho, tamanhoController.createTamanhoController);

// rotas put
router.put("/update/:id", authMiddleware, validaIdParams, validaTamanho, tamanhoController.updateTamanhoController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaIdParams, tamanhoController.removeTamanhoController);

module.exports = router;