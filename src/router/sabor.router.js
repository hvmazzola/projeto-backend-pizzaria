const express = require("express");
const router = express.Router();
const saborController = require("../controller/sabor.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaIdParams, validaSabor } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaIdParams, saborController.findSaborByIdController);
router.get("/findall", authMiddleware, paginacao, saborController.findAllSaboresController);

// rotas post
router.post("/create", authMiddleware, validaSabor, saborController.createSaborController);

// rotas put
router.put("/update/:id", authMiddleware, validaIdParams, validaSabor, saborController.updateSaborController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaIdParams, saborController.removeSaborController);

module.exports = router;