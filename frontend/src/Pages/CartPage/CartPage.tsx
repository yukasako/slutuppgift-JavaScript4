import { useState, useEffect } from 'react';
import { fetchData } from '../../Utilities/FetchData';
import CartItemCard from '../../Components/CartItemCard';
import { CartItemModel } from '../../Models/ItemModel';
import InputForm from '../../Components/InputForm';

function CartPage() {
  const [cart, setCart] = useState<CartItemModel[]>([]);
  const [checkout, setCheckout] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    const cartItems = await fetchData('cart');
    setCart(cartItems);
  };

  const caluculateTotal = async () => {
    const cartItems = await fetchData('cart');
    let totalPrice = 0;
    let totalQuantity = 0;
    cartItems.forEach((item: CartItemModel) => {
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
      {cart.length > 0 ? (
        <div className='flex flex-col gap-10 border-'>
          {cart.map((item, i) => (
            <CartItemCard item={item} key={i} />
          ))}
          <button
            onClick={() => {
              setCheckout(true);
              caluculateTotal();
            }}
            className='bg-black text-white px-6 py-3 rounded-md font-bold'
          >
            Check out
          </button>
        </div>
      ) : (
        <h1>Cart is empty</h1>
      )}

      {checkout ? (
        <div>
          <div>
            <p className='text-right text-xl'>{totalQuantity} items </p>
            <p className='text-right text-3xl font-bold '>
              Total: {totalPrice} kr
            </p>
          </div>
          <InputForm></InputForm>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CartPage;
