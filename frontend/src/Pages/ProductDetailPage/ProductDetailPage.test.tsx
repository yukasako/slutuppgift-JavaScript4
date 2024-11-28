import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductDetailPage from './ProductDetailPage';
import ProductDetailCard from '../../Components/ProductDetailCard';
import { BrowserRouter as Router } from 'react-router-dom';

const mockItem = {
  id: 1,
  name: 'Gift box with ribbon',
  price: 100,
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita soluta! Ipsa, veritatis. Voluptatem magnam impedit consequuntur eaque beatae veritatis quidem, eveniet, laborum doloremque placeat dignissimos earum natus aliquid distinctio!',
  category: 'box',
  image: 'box-1',
  stock: 2,
  sold: 5,
};

beforeEach(() => {
  render(
    <Router>
      <ProductDetailPage />
      <ProductDetailCard selectedItem={mockItem} />
    </Router>
  );
});

describe('ProductDetailPage', () => {
  it('render product details such as images, name, price', () => {
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
