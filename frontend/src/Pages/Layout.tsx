import { Outlet } from 'react-router-dom';
import Header from '../Components/HeaderFooter/Header';
import Footer from '../Components/HeaderFooter/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
