import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Order from '.';

// Mock dos dados
const mockOrder = {
  title: 'Potato Lite',
  items: ["Small and Compact", "Highly Portable", "Unapologetically delicious"],
  price: 9.99,
  imageUrl: 'potato_lite_image_url',
};

test('renders Order component', () => {
  // Mock da função de clique do botão
  const handleClick = jest.fn();

  render(<Order {...mockOrder} onClick={handleClick} />);

  // Verifica se o título está presente
  const titleElement = screen.getByText(/Potato Lite/i);
  expect(titleElement).toBeInTheDocument();

  // Verifica se os itens estão presentes
  mockOrder.items.forEach((item) => {
    const itemElement = screen.getByText(item);
    expect(itemElement).toBeInTheDocument();
  });

  // Verifica se o botão está presente
  const buttonElement = screen.getByRole('button', { name: /Order/i });
  expect(buttonElement).toBeInTheDocument();

  // Simula um clique no botão
  fireEvent.click(buttonElement);

  // Verifica se a função de clique foi chamada
  expect(handleClick).toHaveBeenCalledTimes(1);

  // Verifica se o subtexto está presente
  const priceElement = screen.getByText(/starting at \$9.99/i);
  expect(priceElement).toBeInTheDocument();

  // Verifica se a imagem está presente
  const imageElement = screen.getByAltText(/Product Image/i);
  expect(imageElement).toBeInTheDocument();
});
