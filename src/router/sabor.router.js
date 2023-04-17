const express = require("express");
const router = express.Router();
const saborController = require("../controller/sabor.controller");
const authMiddleware = require("../middleware/auth.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, saborController.findSaborByIdController);
router.get("/findall", authMiddleware, saborController.findAllSaboresController);

// rotas post
router.post("/create", authMiddleware, saborController.createSaborController);

// rotas put
router.put("/update/:id", authMiddleware, saborController.updateSaborController);

// rotas delete
router.delete("/remove/:id", authMiddleware, saborController.removeSaborController);

module.exports = router;