import { useEffect, useState } from 'react';
import ProductList from '../../Components/Items/ProductList';
import subImg from '../../assets/hero/hero-3.jpg';
import { fetchData } from '../../Utilities/FetchData';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    const productsData = await fetchData('products');
    setProducts(productsData);
  };

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
