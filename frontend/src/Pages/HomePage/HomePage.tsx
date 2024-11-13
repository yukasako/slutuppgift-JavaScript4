import { Link } from 'react-router-dom';
import hero from '../../assets/hero/hero-1.jpg';

function HomePage() {
  return (
    <div className='min-h-screen relative z-0 -mt-20'>
      <div>
        <img src={hero} alt='hero' className='w-full h-[100vh] object-cover' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent'></div>
        <div className='text-white absolute inset-0 z-10 flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-extrabold font-serif italic drop-shadow-2xl'>
            Christmas Featured Collection
          </h1>
          <Link to={'/products'}>
            <button>Check Collection</button>
          </Link>
        </div>
      </div>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          debitis fuga voluptatem commodi praesentium, modi perferendis deleniti
          magni quo doloremque facilis nesciunt vero labore est earum iusto
          sapiente animi error.
        </p>
      </article>
    </div>
  );
}

export default HomePage;
