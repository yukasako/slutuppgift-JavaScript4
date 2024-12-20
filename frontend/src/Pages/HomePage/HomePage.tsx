import { Link } from 'react-router-dom';
import hero from '../../assets/hero/hero-1.jpg';
import subImg from '../../assets/hero/hero-4.jpg';
import style from './HomePage.module.css';
import ProductList from '../../Components/Items/ProductList';
import { ItemModel } from '../../Models/ItemModel';
import { fetchData } from '../../Utilities/FetchData';
import { useEffect, useState } from 'react';

function HomePage() {
  const [bestseller, setBestseller] = useState<ItemModel[]>([]);

  useEffect(() => {
    getBestseller();
  }, []);

  const getBestseller = async () => {
    const productsData = await fetchData('products');
    const bestseller = productsData
      .sort((a: ItemModel, b: ItemModel) => b.sold - a.sold)
      .slice(0, 4);
    setBestseller(bestseller);
  };

  return (
    <div className='min-h-screen relative -mt-20'>
      <div>
        {/* hero img */}
        <img src={hero} alt='hero' className='w-full h-[100vh] object-cover' />
        {/* shadow on hero*/}
        <div className='w-full h-[100vh] bg-gradient-to-b from-black/70 via-transparent to-transparent absolute inset-0'></div>
        {/* contents on hero */}
        <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-10 text-white absolute inset-0'>
          {/* shadow */}
          <div className='absolute w-72 h-72 rounded-full bg-black/20 blur-xl'></div>
          <h1
            className={`w-4/5 text-6xl font-extrabold font-serif italic drop-shadow-2xl text-center ${style.textShadow}`}
          >
            Christmas Featured Collection
          </h1>
          <Link to={'/products'}>
            <button className='bg-white text-black px-6 py-3 rounded-md font-bold'>
              Check Collection
            </button>
          </Link>
        </div>
      </div>
      <article className='bg-slate-950 text-white italic'>
        <p className={`w-2/3 mx-auto py-10 text-center ${style.cursive}`}>
          Celebrate the holiday season with our exclusive collection of
          christmas items. From thoughtful holiday gifts for loved ones to
          stunning christmas decorations that transform your home, our carefully
          curated seasonal offers bring joy to every occasion. Discover unique
          gift ideas, festive decor, and special deals that make this christmas
          season unforgettable.
        </p>
      </article>
      <div className='w-5/6 flex flex-col mx-auto gap-10 py-10'>
        <h2 className='text-3xl font-bold mx-auto'>Best Sellers</h2>
        <ProductList items={bestseller}></ProductList>
        <Link to={'/products'} className='mx-auto'>
          <button className='bg-black text-white px-6 py-3 rounded-md font-bold'>
            All Collections
          </button>
        </Link>
      </div>
      <img src={subImg} alt='subImg' className='w-full h-[25vh] object-cover' />
    </div>
  );
}

export default HomePage;
