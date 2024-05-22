import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Title = styled(Typography)({
  flexGrow: 1,
  fontWeight: 'bold',
});

const NavLink = styled('a')(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Title variant="h6">
            PotatoTM
          </Title>
          <Box display={{ xs: "none", sm: "flex" }}>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#feature">Feature</NavLink>
            <NavLink href="#nutrition">Nutrition</NavLink>
            <NavLink href="#buy-it-now">Buy It Now</NavLink>
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
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
      >
        <List>
          <ListItem button>
            <NavLink href="#about">
              <ListItemText primary="About" />
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink href="#feature">
              <ListItemText primary="Feature" />
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink href="#nutrition">
              <ListItemText primary="Nutrition" />
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink href="#buy-it-now">
              <ListItemText primary="Buy It Now" />
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
