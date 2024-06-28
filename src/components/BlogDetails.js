// src/components/BlogDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, Typography, Button } from '@mui/material';
import { deleteBlog } from '../store/actions';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === parseInt(id))
  );

  if (!blog) {
    return <Typography variant="h6">Blog not found.</Typography>;
  }

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
    navigate('/');
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Published on {blog.date} by {blog.author}
          </Typography>
          <Typography variant="body1">
            {blog.content}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={blog.image} alt={blog.title} style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete Blog
      </Button>
    </Container>
  );
};

export default BlogDetail;
