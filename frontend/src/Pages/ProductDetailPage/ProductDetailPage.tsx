import { useParams } from 'react-router-dom';
import dummyData from '../../assets/dummy-data/data';
import subImg from '../../assets/hero/hero-6.webp';
import ProductList from '../../Components/Items/ProductList';

function ProductDetailPage() {
  const param = useParams();
  const itemId = Number(param.id);

  const selectedItem = dummyData.find((item) => {
    return item.id === itemId;
  });

  const sameCategory = dummyData.filter((item) => {
    return item.category === selectedItem?.category;
  });
  const suggestions = sameCategory.filter((item) => {
    return item.id !== selectedItem?.id;
  });

  return (
    <div className='flex flex-col'>
      {selectedItem ? (
        <div className='w-4/5 flex flex-col mx-auto gap-12 py-12 my-8'>
          <div className='flex flex-col sm:flex-row mx-auto gap-10 lg:gap-24'>
            <img
              className='w-1/2 h-auto object-contain'
              src={`/productImages/${selectedItem.image}.webp`}
              alt='productImg'
            />
            <div className='flex flex-col justify-evenly gap-4 lg:w-1/3'>
              <div className='w-full flex flex-row justify-evenly'>
                <p className='font-bold	text-xl'>{selectedItem.name}</p>
                <p>{selectedItem.price} kr</p>
              </div>
              <p className='text-slate-500 text-sm sm:text-base'>
                {selectedItem.description}
              </p>
              <button className='w-full bg-black text-white px-6 py-3 rounded-md font-bold'>
                Add to Cart
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-6 py-6'>
            <h2 className='text-bold italic mx-auto'>You may also like...</h2>
            <ProductList items={suggestions}></ProductList>
          </div>
        </div>
      ) : (
        <div>
          <p>Item Not found</p>
        </div>
      )}
      <img src={subImg} alt='subImg' className='w-full h-[25vh] object-cover' />
    </div>
  );
}

export default ProductDetailPage;
