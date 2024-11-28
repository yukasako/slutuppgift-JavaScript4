// テスト用インポート
import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
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

  it('should have a CTA button to product page.', () => {
    const CTAbtn = screen.getByRole('link', { name: /Check Collection/i });
    // to属性が正しいかを確認(hrefにするのはコンパイルされた時に<a href="/products">となるから)
    expect(CTAbtn).toHaveAttribute('href', '/products');
    expect(CTAbtn).toBeInTheDocument();
  });

  it('render text with SEO keywords.', () => {
    const SEOkeywords = [
      /holiday/i,
      /gifts/i,
      /holiday gifts/i,
      /decoration/i,
      /christmas decoration/i,
      /seasonal offers/i,
    ];

    SEOkeywords.forEach((keyword) => {
      expect(screen.getByText(keyword)).toBeInTheDocument();
    });
  });
});
