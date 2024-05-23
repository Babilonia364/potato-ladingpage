import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.';

describe('Footer Component', () => {
  test('renders since you came here text', () => {
    const { getByText } = render(<Footer />);
    const sinceYouCameHereText = getByText(/Since you came here to read this/i);
    expect(sinceYouCameHereText).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(/Copyright © 2015 PotatoTM All rights reserved/i);
    expect(copyrightText).toBeInTheDocument();
  });

  test('renders history link', () => {
    const { getByText } = render(<Footer />);
    const historyLink = getByText(/History/i);
    expect(historyLink).toBeInTheDocument();
  });

  test('renders about link', () => {
    const { getByText } = render(<Footer />);
    const aboutLink = getByText(/About/i);
    expect(aboutLink).toBeInTheDocument();
  });

  test('renders contact us link', () => {
    const { getByText } = render(<Footer />);
    const contactUsLink = getByText(/Contact us/i);
    expect(contactUsLink).toBeInTheDocument();
  });

  test('renders free potato link', () => {
    const { getByText } = render(<Footer />);
    const freePotatoLink = getByText(/Free Potato/i);
    expect(freePotatoLink).toBeInTheDocument();
  });
});
