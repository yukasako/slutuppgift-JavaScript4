import { useParams } from 'react-router-dom';
import dummyData from '../../assets/dummy-data/data';
import subImg from '../../assets/hero/hero-6.webp';
// import ProductList from '../../Components/Items/ProductList';

function ProductDetailPage() {
  const param = useParams();
  const itemId = Number(param.id);

  const selectedItem = dummyData.find((item) => {
    return item.id === itemId;
  });
  console.log(selectedItem);

  return (
    <div className='flex flex-col justify-center items-center'>
      {selectedItem ? (
        <div className='w-4/5 flex flex-col item-center gap-10 py-12'>
          <div className='flex flex-col sm:flex-row items-center gap-10'>
            <img
              className='w-1/2 h-auto object-contain'
              src={`/productImages/${selectedItem.image}.webp`}
              alt='productImg'
            />
            <div className='flex flex-col justify-evenly items-center gap-4'>
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
          <div>
            <h2 className='text-center'>You may also like...</h2>
            {/* <ProductList></ProductList> */}
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
