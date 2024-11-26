import { useState, useEffect } from 'react';
import { fetchData } from '../../Utilities/FetchData';
import CartItemCard from '../../Components/CartItemCard';
import { CartItemModel } from '../../Models/ItemModel';

function CartPage() {
  const [cart, setCart] = useState<CartItemModel[]>([]);

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    const cartItems = await fetchData('cart');
    setCart(cartItems);
  };

  return (
    <div>
      <div>
        {cart.map((item, i) => (
          <CartItemCard item={item} key={i} />
        ))}
      </div>
      <div>
        <h1>Cart Items</h1>
      </div>
    </div>
  );
}

export default CartPage;
