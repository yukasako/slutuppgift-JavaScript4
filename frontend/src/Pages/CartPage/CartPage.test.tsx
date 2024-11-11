import { describe, it, beforeEach } from 'vitest'; // expect missing
import { render } from '@testing-library/react'; // screen missing
import CartPage from './CartPage';

beforeEach(() => render(<CartPage></CartPage>));

describe('CartPage', () => {
  it('Render products in the cart with correct quantity and price.', () => {
    // expect()
  });
  it('Calculate total price correctly.', () => {
    // expect()
  });
});
