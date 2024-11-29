export const listProducts = async (req, res) => {
  try {
    const response = await fetch('http://localhost:3001/products');
    if (response.ok) {
      const products = await response.json();
      res.status(200).json({ success: true, data: products });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

export const findProducts = async (req, res) => {
  const param = req.params.id;
  try {
    const response = await fetch(`http://localhost:3001/products/${param}`);
    if (response.ok) {
      const products = await response.json();
      res.status(200).json({ success: true, data: products });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};
