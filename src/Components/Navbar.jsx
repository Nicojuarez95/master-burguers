import * as React from 'react';
import { Height, ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateProvider';
import { useState } from 'react';
import { Menu as MenuIcon, Home as HomeIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import logoNav from "../images/logomaster.png"
import LunchDiningIcon from '@mui/icons-material/LunchDining';

export default function Navbar() {
  const [{ basket }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false); // Estado para controlar la apertura y cierre del menú hamburguesa

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          {/* Botón para abrir el menú hamburguesa */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 4 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} className='nabvar'>
            <img className='logo1' src={logoNav} alt="" />
          </Link>

          <div style={{ flexGrow: 1 }} />

          {/* Ícono del carrito */}
          <Link to="/carrito" style={{ color: 'inherit', textDecoration: 'none' }}>
          <IconButton style={{ color: 'white' }}>
              <Badge badgeContent={basket?.length} color='primary'>
                <ShoppingCart fontSize='large'/>
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Menú hamburguesa */}
      <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
        <List style={{ backgroundColor:'gray', height:'100vh' }}>
          {/* Ícono y enlace para la página de inicio */}
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon style={{ color:'white' }}/>
            </ListItemIcon>
            <ListItemText primary="INICIO" style={{ color:'white' }}/>
          </ListItem>

          {/* Ícono y enlace para el carrito */}
          <ListItem button component={Link} to="/productos">
            <ListItemIcon>
              <LunchDiningIcon style={{ color:'white' }}/>
            </ListItemIcon>
            <ListItemText primary="HAMBURGUESAS" style={{ color:'white' }}/>
          </ListItem>
        </List>
      </Drawer>
      
    </React.Fragment>
  );
}