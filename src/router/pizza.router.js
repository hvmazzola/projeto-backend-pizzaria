const express = require("express");
const router = express.Router();
const pizzaController = require("../controller/pizza.controller");
const authMiddleware = require("../middleware/auth.middleware");

// rotas get
router.get("/findById/:id", authMiddleware, pizzaController.findPizzaByIdController);
router.get("/findall", authMiddleware, pizzaController.findAllPizzasController);

// rotas post
router.post("/create", authMiddleware, pizzaController.createPizzaController);
router.post("/addTamanho/:id", authMiddleware, pizzaController.addTamanhoPizzaController);

// rotas put
router.put("/update/:id", authMiddleware, pizzaController.updatePizzaController);

// rotas delete
router.delete("/remove/:id", authMiddleware, pizzaController.removePizzaController);
router.delete("/removeTamanho/:id", authMiddleware, pizzaController.removeTamanhoPizzaController);

module.exports = router;