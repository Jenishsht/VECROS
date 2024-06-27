import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Typography, Grid } from '@mui/material';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === parseInt(id))
  );

  if (!blog) {
    return <Typography variant="h6">Blog not found.</Typography>;
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {/* Image on the right */}
        <Grid item xs={12} md={6} style={{ textAlign: 'right' }}>
          <img
            src={blog.image}
            alt={blog.title}
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
        {/* Details on the left */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Published on {blog.date} by {blog.author}
          </Typography>
          <Typography variant="body1" paragraph>
            {blog.content}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogDetail;
