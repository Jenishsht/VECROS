// src/components/BlogForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { addBlog, editBlog } from '../store/actions';

const BlogForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogToEdit = useSelector((state) =>
    state.blogs.find((blog) => blog.id === parseInt(id))
  );

  const [blog, setBlog] = useState({
    title: '',
    content: '',
    author: '',
    date: '',
    image: '',
    excerpt:'',
  });

  useEffect(() => {
    if (blogToEdit) {
      setBlog(blogToEdit);
    }
  }, [blogToEdit]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editBlog(blog));
    } else {
      dispatch(addBlog({ ...blog, id: Date.now() }));
    }
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {id ? 'Edit Blog' : 'Create Blog'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={blog.title}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Content"
          name="content"
          value={blog.content}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={4}
        />
        <TextField
          label="Author"
          name="author"
          value={blog.author}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Date"
          name="date"
          value={blog.date}
          onChange={handleChange}
          fullWidth
          required
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Image URL"
          name="image"
          value={blog.image}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          {id ? 'Update Blog' : 'Create Blog'}
        </Button>
      </form>
    </Container>
  );
};

export default BlogForm;
