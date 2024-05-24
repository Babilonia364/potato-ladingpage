import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import features from '@/assets/images/potato_features.jpg';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: `${theme.spacing(6)} ${theme.spacing(2)}`,
  background: 'linear-gradient(to bottom, #F0DFB4, #F0DFB4, #F0DFB4)',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  textAlign: 'center',
  color: '#88652B',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
  fontWeight: 'light',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  textAlign: 'center',
  color: '#88652B',
  '& sup': {
    fontSize: '.9rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    '& sup': {
      fontSize: '.6rem',
    },
  },
}));

const Image = styled('img')(({ theme }) => ({
  width: '35%',
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  width: '100%',
  maxWidth: '600px',
}));

function Features() {
  return (
    <StyledBox id="feature" component="section">
      <TextContainer>
        <Title variant="h1" gutterBottom>
          Easily Transformable
        </Title>
        <Description variant="h3" gutterBottom>
          Because of its unique structure, <b>Potato</b><sup>TM</sup> is easily useable and transformable in any way you can think of.
        </Description>
      </TextContainer>
      <Image
        src={features.src}
        alt="Some nutritional values of a potato: 110 calories, 26g carbohydrate, 3g protein and 0g fat"
      />
    </StyledBox>
  );
}

export default Features;
