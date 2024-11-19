import ProductCard from './ProductCard';
import { Item } from '../../assets/dummy-data/data-model';

function ProductList(props: { items: Item[] }) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" grid-flow-row gap-4'>
      {props.items.map((item, i) => (
        <ProductCard item={item} key={i} />
      ))}
    </div>
  );
}

export default ProductList;
