import { describe, it, beforeEach } from 'vitest'; // expect missing
import { render } from '@testing-library/react'; // screen missing
import HomePage from './HomePage';

beforeEach(() => render(<HomePage></HomePage>));

describe('HomePage', () => {
  it('Render Hero and CTA button.', () => {
    // expect()
  });
  it('Render text with SEO keywords.', () => {
    // expect()
  });
  it('Render bestseller items.', () => {
    // expect()
  });
});
