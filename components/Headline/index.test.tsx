import React from 'react';
import { render, screen } from '@testing-library/react';
import Headline from '.';
import potatoImage from '@/assets/images/potatos_main.png';

describe('Headline', () => {
  it('renders main text with correct content', () => {
    render(<Headline />);
    const mainText = screen.getByText('"Sweet, Nutritious and Delicious"');
    expect(mainText).toBeInTheDocument();
  });

  it('renders subtext with correct content', () => {
    render(<Headline />);
    const subtext1 = screen.getByText('The key to happiness is hidden in the');
    const subtext2 = screen.getByText('Potato');
    const subtext3 = screen.getByText('TM');
    expect(subtext1).toBeInTheDocument();
    expect(subtext2).toBeInTheDocument();
    expect(subtext3).toBeInTheDocument();
  });

  it('renders an image with correct source and alt text', () => {
    render(<Headline />);
    const image = screen.getByAltText('Potato');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', potatoImage.src);
  });
});
