import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Blog
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/category/technology">Technology</Button>
        <Button color="inherit" component={Link} to="/category/travel">Travel</Button>
        <Button color="inherit" component={Link} to="/category/food">Food</Button>
        <Button color="inherit" component={Link} to="/category/lifestyle">Lifestyle</Button>
        <Box ml={2}>
          <SearchBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
