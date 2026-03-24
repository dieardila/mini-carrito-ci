let cart = [];

exports.getCart = (req, res) => {
  res.json(cart);
};

exports.addProduct = (req, res) => {

  const { name, price, quantity } = req.body;

  if (!name || !price || !quantity) {
    return res.status(400).json({ error: "Datos incompletos" });
  }

  const product = {
    id: cart.length + 1,
    name,
    price,
    quantity
  };

  cart.push(product);

  res.status(201).json(product);
};

exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter(p => p.id !== id);
  res.json({ message: "Producto eliminado" });
};

exports.getTotal = (req, res) => {
  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
  res.json({ total });
};

exports.resetCart = () => {
  cart = [];
};
