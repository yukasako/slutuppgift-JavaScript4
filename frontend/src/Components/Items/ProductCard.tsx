import { Item } from '../../assets/dummy-data/data-model';

function ProductCard(props: { item: Item }) {
  return (
    <div className='max-w-96'>
      <img
        src={`public/productImages/${props.item.image}.webp`}
        alt='productImg'
      />
      <div className='flex flex-row justify-between px-6 font-bold'>
        <span>{props.item.name}</span>
        <span>{props.item.price} kr</span>
      </div>
    </div>
  );
}

export default ProductCard;
