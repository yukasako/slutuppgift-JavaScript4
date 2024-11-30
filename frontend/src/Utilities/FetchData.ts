import { CartItemModel } from '../Models/ItemModel';

export const fetchData = async (CartOrProducts: string) => {
  console.log('Fetch is running');
  const response = await fetch(`http://localhost:3000/api/${CartOrProducts}`);
  const json = await response.json();
  const data = await json.data;
  return data;
};

export const postCartItem = async (body: CartItemModel) => {
  console.log('Posting');
  try {
    const response = await fetch(`http://localhost:3000/api/cart/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      alert('Item is added to the cart');
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteCartItem = async (id: number) => {
  console.log('Deleting');
  try {
    const response = await fetch(
      `http://localhost:3000/api/cart/delete/${id}`,
      {
        method: 'DELETE',
      }
    );
    if (response.ok) {
      alert('Item is removed from cart');
      window.location.reload(); // 成功後にページを再読み込み
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateCartItem = async (id: number, body: CartItemModel) => {
  console.log('Updating');
  try {
    const response = await fetch(
      `http://localhost:3000/api/cart/update/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    if (response.ok) {
      console.log('Updated quantity', body.quantity);
    }
  } catch (err) {
    console.log(err);
  }
};
