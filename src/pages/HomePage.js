import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard';

const HomePage = () => {
  const blogs = useSelector((state) => state.blogs);
  const searchQuery = useSelector((state) => state.searchQuery);
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <div style={{ 
        backgroundImage: `url('/homepage.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        marginBottom: '20px',
        position: 'relative',
      }}>
      
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Featured Blogs
          </Typography>
          <Grid container spacing={2}>
            {filteredBlogs.map((blog) => (
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

export default HomePage;
