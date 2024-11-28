import { CartItemModel, ItemModel } from '../Models/ItemModel';
import { fetchData } from '../Utilities/FetchData';

type ProductDetailCardProps = {
  selectedItem: ItemModel;
};

function ProductDetailCard({ selectedItem }: ProductDetailCardProps) {
  const addToCart = async () => {
    const cartItems = await fetchData('cart');
    console.log(cartItems);

    // もし同じアイテムがカートにあれば、Quantityを変更し
    const existingItem = cartItems.filter(
      (item: CartItemModel) => item.id === selectedItem.id
    )[0]; // json-serverの仕様で配列に格納されちゃうから[0]で取り出し

    if (existingItem) {
      try {
        const updateQuantity = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        const response = await fetch(
          `http://localhost:3001/cart/${selectedItem.id}`,
          {
            method: 'PUT',
            headers: {},
            body: JSON.stringify(updateQuantity),
          }
        );
        if (response.ok) {
          alert('Item is added to the cart');
        }
      } catch (err) {
        alert(`Error: ${err}`);
      }
    }
    // もし無ければ新たに１点カートにポストする。
    else {
      try {
        const body = {
          id: selectedItem.id,
          name: selectedItem.name,
          price: selectedItem.price,
          category: selectedItem.category,
          image: selectedItem.image,
          quantity: 1,
        };
        const response = await fetch(`http://localhost:3001/cart`, {
          method: 'POST',
          headers: {},
          body: JSON.stringify(body),
        });
        if (response.ok) {
          alert('Item is added to the cart');
        }
      } catch (err) {
        alert(`Error: ${err}`);
      }
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
