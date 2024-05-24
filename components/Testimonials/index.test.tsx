import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Testimonials from '.';

describe('TestimonialCarousel component', () => {
  test('renders without crashing', () => {
    render(<Testimonials />);
  });

  test('renders title, testimonial, name, and profession', () => {
    const { getByText } = render(<Testimonials />);
    const titleElement = getByText('100% Customer satisfaction!');
    const testimonialElement = getByText(/I was skeptic at first/i);
    const nameElement = getByText('Jane Doe');
    const professionElement = getByText(/single mom/i);
    expect(titleElement).toBeInTheDocument();
    expect(testimonialElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(professionElement).toBeInTheDocument();
  });

  test('carousel changes testimonial when clicking next', () => {
    const { getByLabelText, getByText } = render(<Testimonials />);
    const nextButton = getByLabelText('Next testimonial');
    const testimonialElement = getByText(/I was skeptic at first/i);
    expect(testimonialElement).toBeInTheDocument();
    fireEvent.click(nextButton);
    const nextTestimonialElement = getByText(/At first, I wasn't sure about trying the Potato/i);
    expect(nextTestimonialElement).toBeInTheDocument();
  });

  test('carousel changes testimonial when clicking previous', () => {
    const { getByLabelText, getByText } = render(<Testimonials />);
    const prevButton = getByLabelText('Previous testimonial');
    const testimonialElement = getByText(/I was skeptic at first/i);
    expect(testimonialElement).toBeInTheDocument();
    fireEvent.click(prevButton);
    const prevTestimonialElement = getByText(/At first, I wasn't sure about trying the Potato/i);
    expect(prevTestimonialElement).toBeInTheDocument();
  });
});
