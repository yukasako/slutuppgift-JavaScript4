import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

// FontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='bg-green-950 text-white flex flex-col px-10 py-10 gap-10'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <Link to={'/'}>Index</Link>
          <Link to={'/products'}>Products</Link>
          <Link to={'/cart'}>Cart</Link>
          <Link to={'/cs'}>Customer Service</Link>
          <Link to={'/company'}>Company</Link>
          <Link to={'/career'}>Career</Link>
        </div>
        <div className='flex flex-row gap-3'>
          <FontAwesomeIcon icon={faFacebook} className='min-h-5' />
          <FontAwesomeIcon icon={faInstagram} className='min-h-5' />
          <FontAwesomeIcon icon={faTwitter} className='min-h-5' />
          <FontAwesomeIcon icon={faTiktok} className='min-h-5' />
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <img src={logo} alt='logo' className='w-10' />
        <p>Store Name @2024</p>
      </div>
    </div>
  );
}

export default Footer;
