import { describe, it, beforeEach } from 'vitest'; // expect missing
import { render } from '@testing-library/react'; // screen missing
import ProductDetailPage from '../../Components/ProductDetail';

beforeEach(() => render(<ProductDetailPage />));

describe('ProductDetailPage', () => {
  it('Render product details correctly.', () => {
    // expect()
  });
  it('Be able increment and decrement amount.', () => {
    // expect()
  });
  it('Be able to add to card.', () => {
    // expect()
  });
});
