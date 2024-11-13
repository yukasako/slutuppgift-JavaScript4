import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='relative z-10 px-10'>
      <div className='bg-transparent text-white flex flex-row justify-between py-4'>
        <img src={logo} alt='logo' className='h-10' />
        <nav className='flex flex-row items-center gap-6 font-bold px-10'>
          <Link to={'/'} className='flex flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faHouseChimney} />
            <span>Home</span>
          </Link>
          <Link to={'/products'} className='flex flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faGift} />
            <span>Products</span>
          </Link>
          <Link to={'/cart'} className='flex flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faSleigh} />
            <span>Cart</span>
          </Link>
        </nav>
      </div>
      <hr className='border-white' />
    </div>
  );
}

export default Header;
