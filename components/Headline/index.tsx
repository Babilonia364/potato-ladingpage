import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import potatoImage from '@/assets/images/potatos_main.png';

const Container = styled('div')({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '6rem 0 4rem 0',
});

const MainText = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  marginBottom: '20px',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const Subtext = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: '20px',
  fontWeight: 'light',
  color: 'white',
  '& sup': {
    fontSize: '.6rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '.9rem',
    '& sup': {
      fontSize: '.5rem',
    },
  },
}));

const Image = styled('img')({
  width: '60%',
});

const Headline = () => {
  return (
    <Container>
      <MainText variant="h2">
        "Sweet, Nutritious and Delicious"
      </MainText>
      <Subtext variant="h3">
        The key to happiness is hidden in the <b>Potato</b><sup>TM</sup>
      </Subtext>
      <Image src={potatoImage.src} alt="Potato" />
    </Container>
  );
};

export default Headline;
