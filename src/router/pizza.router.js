const express = require("express");
const router = express.Router();
const pizzaController = require("../controller/pizza.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaIdParams, validaIdBody, validaPizza, validaSaboresPizza } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, validaIdParams, pizzaController.findPizzaByIdController);
router.get("/findall", authMiddleware, paginacao, pizzaController.findAllPizzasController);

// rotas post
router.post("/create", authMiddleware, validaPizza, pizzaController.createPizzaController);
router.post("/addSabor/:id", authMiddleware, validaIdParams, validaSaboresPizza, validaIdBody, pizzaController.addSaborPizzaController);

// rotas put
router.put("/update/:id", authMiddleware, validaIdParams, validaPizza, pizzaController.updatePizzaController);

// rotas delete
router.delete("/remove/:id", authMiddleware, validaIdParams, pizzaController.removePizzaController);
router.delete("/removeSabor/:id", authMiddleware, validaIdParams, pizzaController.removeSaborPizzaController);

module.exports = router;