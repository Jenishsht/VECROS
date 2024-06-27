import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import BlogDetail from './components/BlogDetails';
import CategoryPage from './pages/CategoryPage'; 
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher';
import { lightTheme, darkTheme } from './theme';

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <ThemeSwitcher />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
