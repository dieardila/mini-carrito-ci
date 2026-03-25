const cart = [];
// GET carrito
const getCart = (req, res) => {
  res.status(200).json(cart);
};

// POST agregar producto
const addToCart = (req, res) => {
  const { name, price, quantity } = req.body;

  if (!name || !price || !quantity) {
    return res.status(400).json({ error: "Datos inválidos" });
  }

  const product = { name, price, quantity };
  cart.push(product);

  res.status(201).json(product);
};

// DELETE producto
const deleteFromCart = (req, res) => {
  const id = parseInt(req.params.id);

  if (id < 0 || id >= cart.length) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  cart.splice(id, 1);

  res.status(200).json({ message: "Eliminado" });
};

// TOTAL
const getTotal = (req, res) => {
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  res.json({ total });
};

// RESET (para tests)
const resetCart = () => {
  cart.length = 0;
};

// 🚨 ESTO ES LO MÁS IMPORTANTE
module.exports = {
  getCart,
  addToCart,
  deleteFromCart,
  getTotal,
  resetCart
};