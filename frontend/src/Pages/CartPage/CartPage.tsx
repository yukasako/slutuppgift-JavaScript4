import { useState, useEffect } from 'react';
import { fetchData } from '../../Utilities/FetchData';
import CartItemCard from '../../Components/CartItemCard';
import { CartItemModel } from '../../Models/ItemModel';

function CartPage() {
  const [cart, setCart] = useState<CartItemModel[]>([]);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    const cartItems = await fetchData('cart');
    console.log(cartItems);
    setCart(cartItems);
  };

  return (
    <div>
      <h1>Cart Page</h1>
      {cart.map((item, i) => (
        <CartItemCard item={item} key={i} />
      ))}
    </div>
  );
}

export default CartPage;
