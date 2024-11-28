// import { describe, it, beforeEach, expect } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import ProductsPage from './ProductsPage';

// // Routerに入れないとテストがエラーになった。
// import { BrowserRouter as Router } from 'react-router-dom';
// beforeEach(() =>
//   render(
//     <Router>
//       <ProductsPage />
//     </Router>
//   )
// );

// describe('ProductsPage call API and render product cards.', () => {
//   it('Render product titles, prices and images of all 26 products.', async () => {
//     // const mockProducts = 3;
//     // const images = await screen.findAllByRole('img');
//     // expect(images).toHaveLength(mockProducts);
//   });
// });

import '@testing-library/jest-dom';
import { describe, it, beforeEach, beforeAll, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { fetchData } from '../../Utilities/FetchData';
import { ItemModel } from '../../Models/ItemModel';
import ProductList from '../../Components/Items/ProductList';
import ProductsPage from './ProductsPage';
import { BrowserRouter as Router } from 'react-router-dom';

// モックの代わりにデータを取得。
let mockProducts: ItemModel[];
beforeAll(async () => {
  mockProducts = await fetchData('products');
});

beforeEach(() =>
  render(
    <Router>
      <ProductsPage />
      <ProductList items={mockProducts}></ProductList>
    </Router>
  )
);

describe('Render product titles, prices and images of all 26 products.', () => {
  it('tests if all 26 product images are rendered.', async () => {
    const totalProducts = 26;
    const heroImage = 1;
    const images = await screen.findAllByRole('img');
    expect(images).toHaveLength(totalProducts + heroImage);
  });
  it('tests if product names are rendered.', () => {
    mockProducts.forEach((mockProducts) => {
      const productName = screen.getByText(mockProducts.name);
      expect(productName).toBeInTheDocument();
    });
  });
});
