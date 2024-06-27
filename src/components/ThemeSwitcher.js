import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from '@mui/material';
import { toggleTheme } from '../store/actions';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={handleThemeChange}
      inputProps={{ 'aria-label': 'controlled' }}
      icon={<Brightness7Icon />} // Light mode icon
      checkedIcon={<Brightness4Icon />} // Dark mode icon
    />
  );
};

export default ThemeSwitcher;
