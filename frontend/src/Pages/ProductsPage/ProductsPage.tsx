import { useState } from 'react';
import ProductList from '../../Components/Items/ProductList';
// import dummyData from '../../assets/dummy-data/data';
import subImg from '../../assets/hero/hero-3.jpg';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    const res = await fetch('http://localhost:3000/api/products');
    const data = await res.json();
    setProducts(data.products);
  };
  getProductData();

  return (
    <div>
      <img src={subImg} alt='subImg' className='w-full h-[25vh] object-cover' />
      <div className='w-5/6 mx-auto flex flex-col gap-10 py-10'>
        <h2 className='text-3xl font-bold mx-auto'>Christmas collection</h2>
        <ProductList items={products}></ProductList>
      </div>
    </div>
  );
}

export default ProductsPage;
