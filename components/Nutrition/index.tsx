import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import nutrition from '@/assets/images/potato_nutrition.jpg';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: `${theme.spacing(6)} ${theme.spacing(2)}`,
  background: 'linear-gradient(to bottom, #83AA71, #83AA71, #81A86F)',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  textAlign: 'center',
  color: 'white',
  '& sup': {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    '& sup': {
      fontSize: '.9rem',
    },
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  textAlign: 'center',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const Image = styled('img')(({ theme }) => ({
  width: '35%',
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
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

function Nutrition() {
  return (
    <StyledBox id="nutrition" component="section">
      <TextContainer>
        <Title variant="h1" gutterBottom>
          Is <b>Potato</b><sup>TM</sup> healthy? Yes it is!
        </Title>
        <Description variant="h3" gutterBottom>
          The majority of carbohydrates in potatoes are complex carbohydrates, your body's main energy source.
        </Description>
      </TextContainer>
      <Image
        src={nutrition.src}
        alt="Some nutritional values of a potato: 110 calories, 26g carbohydrate, 3g protein and 0g fat"
      />
    </StyledBox>
  );
}

export default Nutrition;
