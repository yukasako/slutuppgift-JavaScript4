import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

function Header() {
  return (
    <div className='relative z-10 px-10'>
      <div className='bg-transparent text-white flex flex-row justify-between py-4'>
        <img src={logo} alt='logo' className='h-10' />
        <nav className='flex flex-row space-x-6 items-center font-bold px-10'>
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
      <hr className='border-white' />
    </div>
  );
}

export default Header;
