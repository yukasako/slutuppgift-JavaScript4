import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/HeaderFooter/Header';
import Footer from '../Components/HeaderFooter/Footer';

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <Header location={location.pathname} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
