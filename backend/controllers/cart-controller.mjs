import { makeRequest } from '../utilities/makeRequest.mjs';

export const listCartItems = async (req, res) => {
  const cartItems = await makeRequest('http://localhost:3001/cart', 'GET');
  res.status(200).json({ success: true, data: cartItems });
};

export const postCartItem = async (req, res) => {
  const cartItems = await makeRequest(
    'http://localhost:3001/cart',
    'POST',
    req.body
  );
  res.status(200).json({ success: true, data: cartItems });
};

export const deleteCartItem = async (req, res) => {
  const param = req.params.id;
  const cartItems = await makeRequest(
    `http://localhost:3001/cart/${param}`,
    'DELETE'
  );
  res.status(200).json({ success: true, data: cartItems });
};

export const updateCartItem = async (req, res) => {
  const param = req.params.id;
  const cartItems = await makeRequest(
    `http://localhost:3001/cart/${param}`,
    'PUT',
    req.body
  );
  res.status(200).json({ success: true, data: cartItems });
};
