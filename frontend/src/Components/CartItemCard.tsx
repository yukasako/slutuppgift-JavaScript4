import { CartItemModel } from '../Models/ItemModel';

function CartItemCard(props: { item: CartItemModel }) {
  console.log(props);
  return (
    <div className='mx-auto max-w-96 flex flex-row gap-2 my-4'>
      <img
        src={`/productImages/${props.item.image}.webp`}
        alt='productImg'
        className='w-2/5'
      />
      <div className='flex flex-col px-2'>
        <p className='font-bold'>{props.item.name}</p>
        <p className=''>{props.item.price} kr</p>
      </div>{' '}
    </div>
  );
}

export default CartItemCard;
