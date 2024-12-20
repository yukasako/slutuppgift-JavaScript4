// Old ver.
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// New ver.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Pages/Layout';
import HomePage from './Pages/HomePage/HomePage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import ProductDetailPage from './Pages/ProductDetailPage/ProductDetailPage';
import CartPage from './Pages/CartPage/CartPage';
import NotFoundPage from './Pages/NotFound/NotFoundPage';

function App() {
  return (
    <>
      {/* New ver */}
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        {/* Old ver. */}
        {/* <Router> */}
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/productDetail/:id' element={<ProductDetailPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Route>
        </Routes>
        {/* </Router> */}
      </BrowserRouter>
    </>
  );
}

export default App;
