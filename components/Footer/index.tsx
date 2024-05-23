import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f0f0f0',
  padding: `${theme.spacing(4)} ${theme.spacing(8)}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: `${theme.spacing(4)} ${theme.spacing(4)}`,
  },
}));

const FirstPart = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1.7rem',
  },
}));

const SecondPart = styled(Box)({
  display: 'flex',
  gap: '16px',
});

const FooterText = styled(Typography)(({ theme }) => ({
  color: '#666',
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
    marginBottom: '.1rem'
  },
}));

const FooterLink = styled('a')(({ theme }) => ({
  color: '#666',
  textDecoration: 'none',
  textTransform: 'uppercase',
  '&:hover': {
    textDecoration: 'underline',
  },
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.6rem',
  },
}));

function Footer() {
  return (
    <FooterContainer>
      <FirstPart>
        <FooterText variant="h5">
          Since you came here to read this, have one Potato for free
        </FooterText>
        <FooterText variant="h5">
          Copyright © 2015 PotatoTM All rights reserved
        </FooterText>
      </FirstPart>
      <SecondPart>
        <FooterLink href="#about">History</FooterLink>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Contact us</FooterLink>
        <FooterLink href="#">Free Potato</FooterLink>
      </SecondPart>
    </FooterContainer>
  );
};

export default Footer;
