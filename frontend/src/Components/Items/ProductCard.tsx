import { Item } from '../../Models/ItemModel';
import { useNavigate } from 'react-router-dom';

function ProductCard(props: { item: Item }) {
  const navigate = useNavigate();
  const navigateToDetail = () => {
    navigate(`/productDetail/${props.item.id}`);
  };

  return (
    <div
      onClick={() => navigateToDetail()}
      className='max-w-96 flex flex-col gap-2 my-4'
    >
      <img src={`/productImages/${props.item.image}.webp`} alt='productImg' />
      <div className='flex flex-col px-2'>
        <p className='text-left font-bold'>{props.item.name}</p>
        <p className='text-right'>{props.item.price} kr</p>
      </div>
    </div>
  );
}

export default ProductCard;
