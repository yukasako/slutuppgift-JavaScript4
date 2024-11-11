import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-transparent z-10 flex flex-row justify-between px-6 py-4'>
      <img src='' alt='logo' />
      <nav className='flex flex-row space-x-6'>
        <div>
          <i></i>
          <Link to={'/'}>Home</Link>
        </div>
        <div>
          <i></i>
          <Link to={'/products'}>Products</Link>
        </div>
        <div>
          <i></i>
          <Link to={'/cart'}>Cart</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
