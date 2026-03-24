const express = require("express");
const router = express.Router();

const cart = require("../controllers/cartController");

router.get("/", cart.getCart);
router.post("/", cart.addProduct);
router.delete("/:id", cart.deleteProduct);
router.get("/total", cart.getTotal);

module.exports = router;