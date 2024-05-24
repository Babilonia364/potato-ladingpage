import React from 'react';
import { Button, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

interface OrderProps {
  title: string;
  items: string[];
  price: number;
  imageUrl: string;
  onClick?: () => {};
}

const CustomDivContainer = styled('div')(({ theme }) => ({
  boxShadow: 'none',
  height: '35rem',
  margin: '0 auto',
  textAlign: 'center',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    padding: '20px 8px',
    height: '100%',
    border: '1px solid #BDBDBD',
    width: '100%',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '16px',
  borderColor: '#83CB79',
  color: '#83CB79',
  borderRadius: '50px',
  textTransform: 'none',
  width: '6rem',
  '&:hover': {
    borderColor: '#83CB79',
    backgroundColor: 'rgba(131, 203, 121, 0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '8px',
  },
}));

const BulletListItem = styled(ListItem)(({ theme }) => ({
  padding: '0',
  color: '#BDBDBD', // Cor do ListItem
  '&:before': {
    content: '"•"',
    marginRight: '8px',
    color: '#BDBDBD', // Cor do bullet
  },

  [theme.breakpoints.down('sm')]: {
    '&:before': {
      marginRight: '4px',
    },
  },

  '& .MuiListItemText-root': {
    margin: '0',
    color: '#BDBDBD', // Cor do ListItemText
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#BDBDBD', // Cor do título
  '& sup': {
    fontSize: '.5rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  marginTop: '8px',
  color: '#BDBDBD', // Cor do subtítulo
  fontSize: '.7rem',

  [theme.breakpoints.down('sm')]: {
    marginTop: '4px',
  },
}));

const StyledImage = styled('img')({
  maxWidth: '100%',
});

const ListContainer = styled(Box)(({ theme }) => ({
  height: '10rem',
  overflowY: 'auto',
  marginBottom: '16px',

  [theme.breakpoints.down('sm')]: {
    height: '8rem',
  },
}));

function Order({ title, items, price, imageUrl, onClick }: OrderProps) {
  return (
    <CustomDivContainer>
      <div>
        <Title variant="h2" dangerouslySetInnerHTML={{ __html: title }} />
        <ListContainer>
          <List>
            {items.map((item, index) => (
              <BulletListItem key={index}>
                <ListItemText primary={item} />
              </BulletListItem>
            ))}
          </List>
        </ListContainer>
        <div>
          <StyledButton onClick={onClick} variant="outlined">
            Order
          </StyledButton>
          <Subtitle variant="subtitle1" color="textSecondary">
            starting at ${price}
          </Subtitle>
        </div>
      </div>
      <Box marginTop="8px">
        <StyledImage src={imageUrl} alt="Product Image" />
      </Box>
    </CustomDivContainer>
  );
}

export default Order;
