import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

function Header() {
  return (
    <div className='bg-transparent z-10 flex flex-row justify-between px-10 py-4'>
      <img src={logo} alt='logo' className='h-10' />
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
