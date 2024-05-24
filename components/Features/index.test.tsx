import React from 'react';
import { render } from '@testing-library/react';
import Features from '.';

describe('Features component', () => {
  test('renders without crashing', () => {
    render(<Features />);
  });

  test('renders title and description', () => {
    const { getByText } = render(<Features />);
    const titleElement = getByText('Easily Transformable');
    const descriptionElement = getByText(/Because of its unique structure/i);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders image', () => {
    const { getByAltText } = render(<Features />);
    const imageElement = getByAltText(
      'Some nutritional values of a potato: 110 calories, 26g carbohydrate, 3g protein and 0g fat'
    );
    expect(imageElement).toBeInTheDocument();
  });
});
