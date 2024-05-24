import { Box, Typography, styled } from "@mui/material";

export const TestimonialBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  padding: `${theme.spacing(6)} ${theme.spacing(2)}`,
  gap: theme.spacing(15),
}));

export const TestimonialContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(15),
}));

export const TestimonialTypographyBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30rem',
});

export const TestimonialDetails = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Title = styled(Typography)(({ theme }) => ({
  color: '#6B6B6B',
  fontSize: '3rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

export const Testimonial = styled(Typography)(({ theme }) => ({
  color: '#6B6B6B',
  fontSize: '1rem',
  textAlign: 'justify',
  [theme.breakpoints.down('sm')]: {
    fontSize: '.8rem',
  },
}));

export const Info = styled(Typography)(({ theme }) => ({
  color: '#6B6B6B',
  fontSize: '.8rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '.6rem',
  },
}));