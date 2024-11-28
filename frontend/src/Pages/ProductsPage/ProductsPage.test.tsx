import '@testing-library/jest-dom';
import { describe, it, beforeEach, beforeAll, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { fetchData } from '../../Utilities/FetchData';
import { ItemModel } from '../../Models/ItemModel';
import ProductList from '../../Components/Items/ProductList';
import ProductsPage from './ProductsPage';
import { BrowserRouter as Router } from 'react-router-dom';

// MockData, refer to src/testMock/handlers.ts
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

describe('Rendering of product titles and images.', () => {
  it('tests if all images of fetched products are rendered.', async () => {
    const mockProducts = 3;
    const heroImage = 1;
    const images = await screen.findAllByRole('img');
    expect(images).toHaveLength(mockProducts + heroImage);
  });
  it('tests if product names are rendered.', () => {
    mockProducts.forEach((mockProducts) => {
      const productName = screen.getByText(mockProducts.name);
      expect(productName).toBeInTheDocument();
    });
  });
});
