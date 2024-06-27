import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Card>
      <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="140"
          image={blog.image}
          alt={blog.title}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {new Date(blog.date).toLocaleDateString()}
          </Typography>
          <Typography variant="body2">
            {blog.excerpt}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BlogCard;
