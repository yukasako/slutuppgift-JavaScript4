import ProductCard from './ProductCard';
import { ItemModel } from '../../Models/ItemModel';

function ProductList(props: { items: ItemModel[] }) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4" grid-flow-row gap-4'>
      {props.items.map((item, i) => (
        <ProductCard item={item} key={i} />
      ))}
    </div>
  );
}

export default ProductList;
