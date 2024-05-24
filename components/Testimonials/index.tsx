import React, { useState } from 'react';
import { Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Info, Testimonial, TestimonialBox, TestimonialContentBox, TestimonialDetails, TestimonialTypographyBox, Title } from './styles';

const testimonials = [
  {
    text: 'I was skeptic at first, but when i tried the Potato for the first time, my life has completely changed! I\'m a better person now. Everything is better with the Potato',
    name: 'Jane Doe',
    profession: 'single mom',
  },
  {
    text: "At first, I wasn't sure about trying the Potato, but it turned out to be the best decision of my life. Now, I can't imagine my life without it. The Potato has truly made a difference!",
    name: "John Smith",
    profession: "freelance writer"
  }  
];

const TestimonialCarousel = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextTestimonial = () => {
    setCurrentIdx((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const prevTestimonial = () => {
    setCurrentIdx((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const currentTestimonial = testimonials[currentIdx];

  return (
    <TestimonialBox component="section" textAlign="center">
      <Title variant="h1" gutterBottom style={{}}>
        100% Customer satisfaction!
      </Title>
      <TestimonialContentBox>
        <IconButton aria-label="Previous testimonial" onClick={prevTestimonial}>
          <ArrowBackIosIcon />
        </IconButton>
        <TestimonialTypographyBox>
          <Testimonial variant="body1" gutterBottom>
            {currentTestimonial.text}
          </Testimonial>
          <TestimonialDetails>
            <Info variant="subtitle2">
              <b>{currentTestimonial.name}</b>, {currentTestimonial.profession}
            </Info>
          </TestimonialDetails>
        </TestimonialTypographyBox>
        <IconButton aria-label="Next testimonial" onClick={nextTestimonial}>
          <ArrowForwardIosIcon />
        </IconButton>
      </TestimonialContentBox>
    </TestimonialBox>
  );
};

export default TestimonialCarousel;
