import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

const CategoryPage = () => {
  const { category } = useParams();
  const blogs = useSelector((state) =>
    state.blogs.filter((blog) => blog.category.toLowerCase() === category)
  );

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          {/* Optionally, you can add a sidebar or other content here */}
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="h4" gutterBottom>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Typography>
          <Grid container spacing={2}>
            {blogs.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <BlogCard blog={blog} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoryPage;
