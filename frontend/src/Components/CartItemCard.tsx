import { useState, useEffect } from 'react';
import { CartItemModel } from '../Models/ItemModel';
import { deleteCartItem } from '../Utilities/FetchData';
import { updateCartItem } from '../Utilities/FetchData';

type CartItemProps = {
  item: CartItemModel;
};

function CartItemCard({ item }: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [totalPrice, setTotalPrice] = useState(item.price * item.quantity);

  useEffect(() => {
    // UI
    setTotalPrice(quantity * item.price);
    // Backend
    updateQuantity();
    if (quantity === 0) {
      deleteCartItem(item.id);
    }
  }, [quantity]);

  const updateQuantity = async () => {
    const updateQuantity = {
      ...item,
      quantity: quantity,
    };
    updateCartItem(item.id, updateQuantity);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='max-w-lg flex flex-row mx-auto gap-10 lg:gap-24 p-3 shadow-lg'>
      <img
        src={`/productImages/${item.image}.webp`}
        alt='productImg'
        className='w-1/3 object-contain'
      />
      <div className='w-2/3 flex flex-col p-3 gap-3'>
        <p className='font-bold text-lg'>{item.name}</p>
        <p className='text-right'>Unit Price: {item.price} kr</p>
        <div className='flex flex-row gap-3 justify-end items-center'>
          <span>Quantity: </span>
          <button
            className='w-6 h-6 bg-neutral-200 text-black rounded-sm'
            onClick={() => {
              decrement();
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className='w-6 h-6 bg-neutral-200 text-black rounded-sm'
            onClick={() => {
              increment();
            }}
          >
            +
          </button>
        </div>
        <p className='text-right'>Total: {totalPrice}kr</p>
        <button
          onClick={() => {
            deleteCartItem(item.id);
          }}
          className='bg-neutral-200 text-black rounded-full p-1'
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CartItemCard;
