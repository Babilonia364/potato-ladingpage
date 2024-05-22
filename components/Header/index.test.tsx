// src/components/__tests__/Header.test.tsx

import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should render the company name', () => {
    expect(screen.getByText('PotatoTM')).toBeInTheDocument();
  });

  it('should render the navigation links', () => {
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Feature')).toBeInTheDocument();
    expect(screen.getByText('Nutrition')).toBeInTheDocument();
    expect(screen.getByText('Buy It Now')).toBeInTheDocument();
  });

  it.each([
    ['About', '#about'],
    ['Feature', '#feature'],
    ['Nutrition', '#nutrition'],
    ['Buy It Now', '#buy-it-now'],
  ])('should have correct href for %s', (linkText, expectedHref) => {
    const link = screen.getByText(linkText);
    expect(link).toHaveAttribute('href', expectedHref);
  });

  it('should render menu hambúrguer', () => {
    const menuButton = screen.getByLabelText('menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('should open drawer when menu hambúrguer is clicked', () => {
    const menuButton = screen.getByLabelText('menu');
    fireEvent.click(menuButton);

    const drawer = screen.getByRole('presentation');
    const { getByText: getByTextInDrawer } = within(drawer);
    const aboutLinkInDrawer = getByTextInDrawer('About');
    expect(aboutLinkInDrawer).toBeInTheDocument();
  });
});
