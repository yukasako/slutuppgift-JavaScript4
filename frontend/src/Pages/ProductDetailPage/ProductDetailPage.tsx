import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import subImg from '../../assets/hero/hero-6.webp';
import ProductList from '../../Components/Items/ProductList';
import { ItemModel } from '../../Models/ItemModel';
import { fetchData } from '../../Utilities/FetchData';
import ProductDetailCard from '../../Components/ProductDetailCard';
import NotFound from '../../Components/NotFound';

function ProductDetailPage() {
  const param = useParams();
  const itemId = Number(param.id);
  const [products, setProducts] = useState<ItemModel[]>([]);
  const [selectedItem, setSelectedItem] = useState<ItemModel>();

  useEffect(() => {
    getProductsData();
  }, [itemId]);

  const getProductsData = async () => {
    const productsData = await fetchData('products');
    setProducts(productsData);
    const selectedItem = productsData.find(
      (item: ItemModel) => Number(item.id) === itemId
    );
    setSelectedItem(selectedItem);
  };

  const sameCategory = products.filter((item: ItemModel) => {
    return item.category === selectedItem?.category;
  });
  const suggestions = sameCategory.filter((item: ItemModel) => {
    return item.id !== selectedItem?.id;
  });

  return (
    <div className='flex flex-col'>
      {selectedItem ? (
        <div className='w-4/5 flex flex-col mx-auto gap-12 py-12 my-8'>
          <ProductDetailCard selectedItem={selectedItem}></ProductDetailCard>
          <div className='flex flex-col gap-6 py-6'>
            <h2 className='text-bold italic mx-auto'>You may also like...</h2>
            <ProductList items={suggestions}></ProductList>
          </div>
        </div>
      ) : (
        <NotFound></NotFound>
      )}
      <img src={subImg} alt='subImg' className='w-full h-[25vh] object-cover' />
    </div>
  );
}

export default ProductDetailPage;
