import { CartItemModel, ItemModel } from '../Models/ItemModel';
import {
  fetchData,
  postCartItem,
  updateCartItem,
} from '../Utilities/FetchData';

type ProductDetailCardProps = {
  selectedItem: ItemModel;
};

function ProductDetailCard({ selectedItem }: ProductDetailCardProps) {
  const addToCart = async () => {
    const cartItems = await fetchData('cart');

    // もし同じアイテムがカートにあれば、Quantityを変更し
    const existingItem = cartItems.filter(
      (item: CartItemModel) => item.id === selectedItem.id
    )[0]; // json-serverの仕様で配列に格納されちゃうから[0]で取り出し

    if (existingItem) {
      const updateQuantity = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updateCartItem(selectedItem.id, updateQuantity);
      alert('Item is added to the cart');
    }
    // もし無ければ新たに１点カートにポストする。
    else {
      const body: CartItemModel = {
        ...selectedItem,
        quantity: 1,
      };
      postCartItem(body);
    }
  };

  return (
    <div className='flex flex-col sm:flex-row mx-auto gap-10 lg:gap-24'>
      <img
        className='w-1/2 h-auto object-contain mx-auto'
        src={`/productImages/${selectedItem.image}.webp`}
        alt={`productImg-${selectedItem.id}`}
      />
      <div className='flex flex-col justify-evenly gap-4 lg:w-1/3'>
        <div className='w-full flex flex-row justify-evenly'>
          <p className='font-bold text-xl'>{selectedItem.name}</p>
          <p>{selectedItem.price} kr</p>
        </div>
        <p className='text-slate-500 text-sm sm:text-base'>
          {selectedItem.description}
        </p>
        <button
          onClick={() => {
            addToCart();
          }}
          className='w-full bg-black text-white px-6 py-3 rounded-md font-bold'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetailCard;
