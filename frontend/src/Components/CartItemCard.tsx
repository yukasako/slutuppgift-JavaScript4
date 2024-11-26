import { CartItemModel } from '../Models/ItemModel';

type CartItemProps = {
  item: CartItemModel;
};

function CartItemCard({ item }: CartItemProps) {
  const deleteCartItem = async () => {
    try {
      const response = await fetch(`http://localhost:3001/cart/${item.id}`, {
        method: 'Delete',
      });
      if (response.ok) {
        alert('Item is removed from cart');
        window.location.reload(); // 成功後にページを再読み込み
      }
    } catch (err) {
      alert(`Error: ${err}`);
    }
  };

  return (
    <div className='flex flex-row mx-auto gap-10 lg:gap-24'>
      <img
        src={`/productImages/${item.image}.webp`}
        alt='productImg'
        className='w-1/3'
      />
      <div className='flex flex-col px-2'>
        <p className='font-bold'>{item.name}</p>
        <p className=''>{item.price} kr</p>
        <div>
          <button>-</button>
          <span>{item.quantity}</span>
          <button>+</button>
        </div>
        <button
          onClick={() => {
            deleteCartItem();
          }}
          className='bg-black text-white rounded-md'
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItemCard;
