// テスト用インポート
import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest'; // expect missing
import { render, screen } from '@testing-library/react';

// Routerに入れないとテストがエラーになった。
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';

beforeEach(() =>
  render(
    <Router>
      <HomePage />
    </Router>
  )
);

describe('HomePage', () => {
  it('should have a heading text with "Christmas"', () => {
    const h1 = screen.getByRole('heading', { name: /Christmas/i });
    expect(h1).toBeInTheDocument();
  });

  it('Should have a CTA button to product page.', async () => {
    const CTAbtn = screen.getByRole('link', { name: /Check Collection/i });
    // to属性が正しいかを確認(hrefにするのはコンパイルされた時に<a href="/products">となるから)
    expect(CTAbtn).toHaveAttribute('href', '/products');
    expect(CTAbtn).toBeInTheDocument();
  });

  it('Render text with SEO keywords.', () => {
    const SEOkeywords = [
      /holiday/i,
      // /gifts/i,
      // /holiday gifts/i,
      // /christmas/i,
      // /decoration/i,
      // /christmas decoration/i,
      // /seasonal offers/i,
    ];

    SEOkeywords.forEach((keyword) => {
      expect(screen.getByText(keyword)).toBeInTheDocument();
    });
  });
});
