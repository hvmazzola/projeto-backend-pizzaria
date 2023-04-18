const express = require("express");
const router = express.Router();
const pizzaController = require("../controller/pizza.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaId, validaPizza } = require("../middleware/validacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaId, pizzaController.findPizzaByIdController);
router.get("/findall", authMiddleware, pizzaController.findAllPizzasController);

// rotas post
router.post("/create", authMiddleware, validaPizza, pizzaController.createPizzaController);
router.post("/addSabor/:id", authMiddleware, validaId, pizzaController.addSaborPizzaController);

// rotas put
router.put("/update/:id", authMiddleware, validaId, validaPizza, pizzaController.updatePizzaController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaId, pizzaController.removePizzaController);
router.delete("/removeSabor/:id", authMiddleware, validaId, pizzaController.removeSaborPizzaController);

module.exports = router;