const express = require("express");
const router = express.Router();
const saborController = require("../controller/sabor.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaId, validaSabor } = require("../middleware/validacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaId, saborController.findSaborByIdController);
router.get("/findall", authMiddleware, saborController.findAllSaboresController);

// rotas post
router.post("/create", authMiddleware, validaSabor, saborController.createSaborController);

// rotas put
router.put("/update/:id", authMiddleware, validaId, validaSabor, saborController.updateSaborController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaId, saborController.removeSaborController);

module.exports = router;