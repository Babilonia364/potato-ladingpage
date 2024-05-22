import React from 'react';
import { render } from '@testing-library/react';
import About from '.';

describe('About Component', () => {
  test('renders title', () => {
    const { getByText } = render(<About />);
    const titleElement = getByText('Diferentes shapes and sizes');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders description', () => {
    const { getByText } = render(<About />);
    const descriptionElementPotato = getByText('Potato');
    const descriptionElementTM = getByText('TM');
    const descriptionElement = getByText('comes in many different unique shapes and sizes.');
    expect(descriptionElementPotato).toBeInTheDocument();
    expect(descriptionElementTM).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders potato image', () => {
    const { getByAltText } = render(<About />);
    const potatoImage = getByAltText('Image of two potatoes');
    expect(potatoImage).toBeInTheDocument();
  });

  test('image div is hidden on small screens', () => {
    const { getByAltText } = render(<About />);
    const imageDiv = getByAltText('');
    expect(imageDiv).toHaveStyle({ display: 'none' });
  });
});
