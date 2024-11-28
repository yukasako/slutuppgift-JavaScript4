import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductDetailPage from './ProductDetailPage';
import ProductDetailCard from '../../Components/ProductDetailCard';
import { BrowserRouter as Router } from 'react-router-dom';
import { ItemModel } from '../../Models/ItemModel';
import { fetchData } from '../../Utilities/FetchData';

// MockData, refer to src/testMock/handlers.ts
let mockItem: ItemModel;
beforeAll(async () => {
  const mockProducts = await fetchData('products');
  mockItem = mockProducts[0];
});

beforeEach(() => {
  render(
    <Router>
      <ProductDetailPage />
      <ProductDetailCard selectedItem={mockItem} />
    </Router>
  );
});

describe('ProductDetailPage', () => {
  it('tests if product details (images, name, price) are rendered.', () => {
    const productImg = screen.getByAltText(`productImg-${mockItem.id}`);
    const productName = screen.getByText(mockItem.name);
    const productPrice = screen.getByText(`${mockItem.price} kr`);
    expect(productImg && productName && productPrice).toBeInTheDocument();
  });
  it('tests if there is a Add-to-Cart btn', () => {
    const CTAbtn = screen.getByRole('button', { name: /Add to Cart/i });
    expect(CTAbtn).toBeInTheDocument();
  });
});
