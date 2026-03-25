const express = require("express");
const router = express.Router();

const cart = require("../controllers/cartController");

// 🔥 CORREGIDO
router.get("/", cart.getCart);
router.post("/", cart.addToCart);
router.delete("/:id", cart.deleteFromCart);
router.get("/total", cart.getTotal);

module.exports = router;