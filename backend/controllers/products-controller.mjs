import { makeRequest } from '../utilities/makeRequest.mjs';

export const listProducts = async (req, res) => {
  const products = await makeRequest('http://localhost:3001/products', 'GET');
  res.status(200).json({ success: true, data: products });
};

export const findProducts = async (req, res) => {
  const param = req.params.id;
  const product = await makeRequest(
    `http://localhost:3001/products/${param}`,
    'GET'
  );
  res.status(200).json({ success: true, data: product });
};
