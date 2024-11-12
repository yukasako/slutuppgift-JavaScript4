import { Outlet } from 'react-router-dom';
import Header from '../Components/HeaderFooter/Header';
import Footer from '../Components/HeaderFooter/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
