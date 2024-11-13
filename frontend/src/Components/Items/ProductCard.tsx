import { Item } from '../../assets/dummy-data/data-model';

function ProductCard(props: { item: Item }) {
  return (
    <div className='max-w-96 place-self-center flex flex-col gap-2'>
      <img
        src={`public/productImages/${props.item.image}.webp`}
        alt='productImg'
      />
      <div className='flex flex-col px-2'>
        <p className='text-left font-bold'>{props.item.name}</p>
        <p className='text-right'>{props.item.price} kr</p>
      </div>
    </div>
  );
}

export default ProductCard;
