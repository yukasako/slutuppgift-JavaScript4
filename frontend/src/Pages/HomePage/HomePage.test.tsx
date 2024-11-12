import { describe, it, beforeEach } from 'vitest'; // expect missing
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

beforeEach(() => render(<HomePage />));

describe('HomePage', () => {
  it('should have a heading text with "Christmas"', () => {
    screen.getByRole('heading', { name: /Christmas/i });
  });
  // it('Should have a CTA button to product page.', () => {
  //   // expect()
  // });
  // it('Render text with SEO keywords.', () => {
  //   // expect()
  // });
});
