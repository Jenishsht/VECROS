import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const categories = ['Technology', 'Travel', 'Food', 'Lifestyle'];

const CategorySidebar = () => {
  return (
    <List>
      {categories.map((category) => (
        <ListItem button component={Link} to={`/category/${category.toLowerCase()}`} key={category}>
          <ListItemText primary={category} />
        </ListItem>
      ))}
    </List>
  );
};

export default CategorySidebar;
