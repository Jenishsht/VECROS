import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

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
          <Typography gutterBottom variant="h6" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.excerpt}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BlogCard;
