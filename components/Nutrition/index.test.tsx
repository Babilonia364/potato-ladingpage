import React from 'react';
import { render } from '@testing-library/react';
import Nutrition from '.';

describe('Nutrition component', () => {
  test('renders without crashing', () => {
    render(<Nutrition />);
  });

  test('renders title and description', () => {
    const { getByText } = render(<Nutrition />);
    const titleElement1 = getByText(/Is/i);
    const titleElement2 = getByText("Potato");
    const titleElement3 = getByText(/TM/i);
    const titleElement4 = getByText(/healthy\? Yes it is!/i);
    const descriptionElement = getByText(/The majority of carbohydrates in potatoes/i);
    expect(titleElement1).toBeInTheDocument();
    expect(titleElement2).toBeInTheDocument();
    expect(titleElement3).toBeInTheDocument();
    expect(titleElement4).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders image', () => {
    const { getByAltText } = render(<Nutrition />);
    const imageElement = getByAltText(
      'Some nutritional values of a potato: 110 calories, 26g carbohydrate, 3g protein and 0g fat'
    );
    expect(imageElement).toBeInTheDocument();
  });
});
