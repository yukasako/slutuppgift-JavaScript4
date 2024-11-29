export const listCartItems = async (req, res) => {
  try {
    const response = await fetch('http://localhost:3001/cart');
    if (response.ok) {
      const cartItems = await response.json();
      res.status(200).json({ success: true, data: cartItems });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

export const postCartItem = async (req, res) => {
  console.log('Received request body:', req.body); // 受け取ったリクエストボディをログに出力
  try {
    const response = await fetch('http://localhost:3001/cart', {
      method: 'POST',
      headers: {},
      body: JSON.stringify(req.body),
    });
    if (response.ok) {
      const cartItems = await response.json();
      res.status(200).json({ success: true, data: cartItems });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

export const deleteCartItem = async (req, res) => {
  const param = req.params.id;
  try {
    const response = await fetch(`http://localhost:3001/cart/${param}`, {
      method: 'DELETE',
      headers: {},
    });
    if (response.ok) {
      const cartItems = await response.json();
      res.status(200).json({ success: true, data: cartItems });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

export const updateCartItem = async (req, res) => {
  const param = req.params.id;
  try {
    const response = await fetch(`http://localhost:3001/cart/${param}`, {
      method: 'PUT',
      headers: {},
      body: JSON.stringify(req.body),
    });
    if (response.ok) {
      const cartItems = await response.json();
      res.status(200).json({ success: true, data: cartItems });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};
