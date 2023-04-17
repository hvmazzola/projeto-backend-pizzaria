const express = require("express");
const router = express.Router();
const pizzaController = require("../controller/pizza.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaPizza } = require("../middleware/validacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, pizzaController.findPizzaByIdController);
router.get("/findall", authMiddleware, pizzaController.findAllPizzasController);

// rotas post
router.post("/create", authMiddleware, validaPizza, pizzaController.createPizzaController);
router.post("/addSabor/:id", authMiddleware, pizzaController.addSaborPizzaController);

// rotas put
router.put("/update/:id", authMiddleware, validaPizza, pizzaController.updatePizzaController);

// rotas delete
router.delete("/remove/:id", authMiddleware, pizzaController.removePizzaController);
router.delete("/removeSabor/:id", authMiddleware, pizzaController.removeSaborPizzaController);

module.exports = router;