import { CartItemModel } from '../Models/ItemModel';

// Reusable fetch function to handle GET, POST, DELETE, and PUT requests
const makeRequest = async (
  url: string,
  method: string,
  body?: CartItemModel
) => {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to fetch');
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
};

// Fetch data for Cart or Products
export const fetchData = async (CartOrProducts: string) => {
  console.log('Fetching data');
  const data = await makeRequest(
    `http://localhost:3000/api/${CartOrProducts}`,
    'GET'
  );
  return data.data;
};

// Post a new cart item
export const postCartItem = async (body: CartItemModel) => {
  console.log('Posting');
  try {
    await makeRequest(`http://localhost:3000/api/cart/post`, 'POST', body);
    alert('Item is added to the cart');
  } catch (err) {
    console.log(err);
  }
};

// Delete a cart item
export const deleteCartItem = async (id: number) => {
  console.log('Deleting');
  try {
    await makeRequest(`http://localhost:3000/api/cart/delete/${id}`, 'DELETE');
    alert('Item is removed from cart');
    window.location.reload(); // Refresh the page after successful deletion
  } catch (err) {
    console.log(err);
  }
};

// Update a cart item
export const updateCartItem = async (id: number, body: CartItemModel) => {
  console.log('Updating');
  try {
    await makeRequest(
      `http://localhost:3000/api/cart/update/${id}`,
      'PUT',
      body
    );
    console.log('Updated quantity', body.quantity);
  } catch (err) {
    console.log(err);
  }
};
