import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../store/actions';

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt={blog.title}
        height="140"
        image={blog.image}
        title={blog.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {blog.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/blog/${blog.id}`}>
          Read More
        </Button>
        <Button size="small" component={Link} to={`/edit/${blog.id}`}>
          Edit
        </Button>
        <Button size="small" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
