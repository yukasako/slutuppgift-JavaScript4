import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { useState } from 'react';

function Header(props: { location: string }) {
  const [mobileNav, setMobileNav] = useState('hidden');

  const toggleShowNav = () => {
    if (mobileNav === 'flex') {
      setMobileNav('hidden');
    } else {
      setMobileNav('flex');
    }
  };

  let bgColor = 'bg-transparent';
  if (props.location !== '/') {
    bgColor = 'bg-gradient-to-r from-red-800 to-red-950';
  }

  return (
    <div className='relative z-10'>
      <div
        className={`${bgColor} text-white flex flex-row justify-between py-4 px-8`}
      >
        <Link to={'/'}>
          <img src={logo} alt='logo' className='h-10' />
        </Link>
        {/* Humburger Btn */}
        <button
          className='sm:hidden z-30'
          onClick={() => {
            toggleShowNav();
          }}
        >
          <FontAwesomeIcon icon={faBars} className='h-8' />
        </button>
        {/* Desktop Nav */}
        <nav className='hidden sm:flex justify-end gap-6 font-bold'>
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
        {/* Mobile Nav */}
        <nav
          className={`${mobileNav} sm:hidden 
        w-full h-dvh 
        bg-black text-white opacity-80 font-bold 
        absolute z-20 top-0 right-0
        flex flex-col items-end px-10 py-32 gap-6 
        `}
          onClick={() => {
            toggleShowNav();
          }}
        >
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
