import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

function Header(props: { location: string }) {
  // console.log(props.location);
  let bgColor = 'bg-transparent';
  if (props.location !== '/') {
    bgColor = 'bg-gradient-to-r from-red-800 to-red-950';
    // bgColor = 'bg-black';
  }
  return (
    <div className='relative z-10'>
      <div
        className={`${bgColor} text-white flex flex-row justify-between py-4 px-8`}
      >
        <img src={logo} alt='logo' className='h-10' />
        <nav className='flex justify-end gap-6 font-bold'>
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
      {props.location === '/' ? <hr className='border-white' /> : null}
    </div>
  );
}

export default Header;
