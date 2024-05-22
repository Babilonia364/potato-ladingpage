import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const CustomAppBar = styled(AppBar)({
  background: 'transparent',
  boxShadow: 'none',
});

const Title = styled(Typography)({
  flexGrow: 3,
  fontWeight: 'bold',
  color: 'white',
  fontSize: '1.65rem',
});

const NavLink = styled('a')(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: 'inherit',
  textDecoration: 'none',
  textTransform: 'uppercase',
  '&:hover': {
    textDecoration: 'underline',
  },
  fontSize: '.75rem',
}));


const BuyItNowLink = styled(NavLink)(({ theme }) => ({
  border: '1px solid white',
  borderRadius: '1rem',
  padding: '.45rem 1.1rem',
}));

const CustomDrawer = styled(Drawer)({
  '& .MuiPaper-root': {
    background: 'transparent',
    border: '1px solid white',
    color: 'white',
  },
});

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <CustomAppBar position="static">
      <Container sx={{ padding: '.5rem 4rem' }} disableGutters>
        <Toolbar disableGutters>
          <Title variant="h1">
            Potato<sup style={{ fontSize: ".6rem" }}>TM</sup>
          </Title>
          <Box
            display={{ xs: "none", sm: "flex" }}
            justifyContent={"space-around"}
            alignItems={"center"}
            flexGrow={1}
          >
            <NavLink href="#about">About</NavLink>
            <NavLink href="#feature">Feature</NavLink>
            <NavLink href="#nutrition">Nutrition</NavLink>
            <BuyItNowLink href="#buy-it-now">Buy It Now</BuyItNowLink>
          </Box>
          <Box display={{ xs: 'flex', sm: 'none' }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <CustomDrawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
      >
        <List>
          <ListItem>
            <NavLink href="#about">
              <ListItemText primary="About" />
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="#feature">
              <ListItemText primary="Feature" />
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="#nutrition">
              <ListItemText primary="Nutrition" />
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="#buy-it-now">
              <ListItemText primary="Buy It Now" />
            </NavLink>
          </ListItem>
        </List>
      </CustomDrawer>
    </CustomAppBar>
  );
}

export default Header;
