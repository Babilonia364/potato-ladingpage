import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import potatosDiv from '@/assets/images/potato_division.png';
import potatos from '@/assets/images/potatos_about.png';

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  background: 'linear-gradient(to bottom, #EAEAEA, #F8F8F8, #EAEAEA)',
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
  color: '#838383',
  fontSize: '3rem',
  marginBottom: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const CustomDescription = styled(CustomTitle)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'light',
  '& sup': {
    fontSize: '.6rem',
    fontWeight: 'bold',
  },
  marginBottom: '.4rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '.9rem',
    '& sup': {
      fontSize: '.5rem',
    },

    marginBottom: '.8rem',
  },
}));

const ImagesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(7),
  marginTop: theme.spacing(7),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
  },
}));

const CustomImageDiv = styled('img')(({ theme }) => ({
  width: '100%',
  display: 'block',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const CustomImagePotato = styled('img')(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '50%',
  },
}));

const About: React.FC = () => {
  return (
    <AboutContainer id='about'>
      <CustomTitle variant="h2" gutterBottom>
        Diferentes shapes and sizes
      </CustomTitle>
      <CustomDescription variant="h3" paragraph>
        <b>Potato</b><sup>TM</sup> comes in many different unique shapes and sizes.
      </CustomDescription>
      <CustomDescription variant="h3" paragraph>
        Find the one that fits your personal preferences.
      </CustomDescription>
      <ImagesContainer>
        <CustomImageDiv src={potatosDiv.src} alt="" />
        <CustomImagePotato src={potatos.src} alt="Image of two potatoes" />
      </ImagesContainer>
    </AboutContainer>
  );
};

export default About;
