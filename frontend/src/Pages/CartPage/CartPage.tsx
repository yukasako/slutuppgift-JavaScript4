import { useState, useEffect } from 'react';
import { fetchData } from '../../Utilities/FetchData';
import CartItemCard from '../../Components/CartItemCard';
import { CartItemModel } from '../../Models/ItemModel';

function CartPage() {
  const [cart, setCart] = useState<CartItemModel[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getCartItems();
    caluculateTotal();
  }, [cart]);

  const getCartItems = async () => {
    const cartItems = await fetchData('cart');
    setCart(cartItems);
  };

  const caluculateTotal = () => {
    let totalPrice = 0;
    let totalQuantity = 0;
    cart.forEach((item) => {
      const itemTotalPrice = item.price * item.quantity;
      totalPrice += itemTotalPrice;
      totalQuantity += item.quantity;
      console.log('Total:', totalPrice);
    });
    setTotalPrice(totalPrice);
    setTotalQuantity(totalQuantity);
  };

  return (
    <div className='w-4/5 flex flex-col md:flex-row item-center justify-around mx-auto gap-12 py-12'>
      <div className='flex flex-col gap-10 border-'>
        {cart.map((item, i) => (
          <CartItemCard item={item} key={i} />
        ))}
      </div>
      <div className='flex flex-col'>
        <h1>Cart Items</h1>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total price: {totalPrice}</p>
      </div>
    </div>
  );
}

export default CartPage;
