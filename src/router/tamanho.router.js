const express = require("express");
const router = express.Router();
const tamanhoController = require("../controller/tamanho.controller");
const authMiddleware = require("../middleware/auth.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, tamanhoController.findTamanhoByIdController);
router.get("/findall", authMiddleware, tamanhoController.findAllTamanhosController);

// rotas post
router.post("/create", authMiddleware, tamanhoController.createTamanhoController);

// rotas put
router.put("/update/:id", authMiddleware, tamanhoController.updateTamanhoController);

// rotas delete
router.delete("/remove/:id", authMiddleware, tamanhoController.removeTamanhoController);

module.exports = router;