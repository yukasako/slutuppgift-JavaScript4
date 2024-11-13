import ProductList from '../../Components/Items/ProductList';
import dummyData from '../../assets/dummy-data/data';
import subImg from '../../assets/hero/hero-3.jpg';

function ProductsPage() {
  return (
    <div>
      <img src={subImg} alt='subImg' className='w-full h-[25vh] object-cover' />
      <div className='w-5/6 place-self-center text-center flex flex-col gap-10 py-10'>
        <h2 className='text-3xl font-bold'>Christmas collection</h2>
        <ProductList items={dummyData}></ProductList>
      </div>
    </div>
  );
}

export default ProductsPage;
