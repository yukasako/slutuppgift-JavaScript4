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
          <div className='flex flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faHouseChimney} />
            <Link to={'/'}>Home</Link>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faGift} />
            <Link to={'/products'}>Products</Link>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faSleigh} />
            <Link to={'/cart'}>Cart</Link>
          </div>
        </nav>
      </div>
      <hr className='border-white' />
    </div>
  );
}

export default Header;
