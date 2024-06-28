import { combineReducers } from 'redux';
import {
  TOGGLE_THEME,
  SET_SEARCH_QUERY,
  ADD_BLOG,
  EDIT_BLOG,
  DELETE_BLOG
} from './actions';

const initialBlogsState = [
  {
    id: 1,
    title: 'Human Vs Ai',
    excerpt: 'Dive into the future of gaming.',
    date: '2024-01-01',
    image: '/technology1.jpg',
    content: 'we explore the synergy between human intelligence and robotic precision as an AI-powered robotic arm plays chess against a human. This interaction highlights the evolving role of AI in enhancing traditional activities. Stay tuned for more insights into technology impact on everyday life.',
    author: 'Jenish',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Navigating the AI Revolution',
    excerpt: 'A glimpse into the future of AI.',
    date: '2024-02-02',
    image: '/technology2.jpg',
    content: '"Navigating the AI Revolution" explores the insights and expertise of Ryan Daws, senior editor at TechForge Media, renowned for his ability to demystify complex technological trends. Daws shares his perspectives on the evolving landscape of artificial intelligence, offering readers a clear pathway through the transformative impacts AI is having on industries worldwide.',
    author: 'Ryan Daws',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'Journey Through the Window',
    excerpt: ' Join us on a visual journey through the lens of a window seat.',
    date: '2024-01-12',
    image: '/travel.jpg',
    content: 'Join us on a visual journey through the lens of a window seat, where every frame tells a unique story of travel. From serene landscapes to bustling cityscapes, experience the beauty and diversity of our planet unfold right before your eyes. Discover how these views inspire wanderlust and evoke a sense of wonder, offering a glimpse into the captivating vistas that await explorers around the globe.',
    author: 'Henerry ',
    category: 'Travel',
  },
  {
    id: 4,
    title: 'Crystal clear waters',
    excerpt: 'Crystal Blue Waters and Tranquil Boats.',
    date: '2024-01-02',
    image: '/travel2.jpg',
    content: 'The azure hues of the water invite you to unwind and immerse yourself in the beauty of nature. Whether you are lounging on the soft sands or exploring the coastline by boat, every moment here is a testament to the wonders of the world around us. Let the gentle lapping of the waves and the warmth of the sun on your skin remind you of lifes simple pleasures..',
    author: 'Robin',
    category: 'Travel',
  },
  {
    id: 5,
    title: 'Bursting with Freshness',
    excerpt: 'Experience a celebration of natures bounty and wholesome eating in every bite.',
    date: '2024-02-20',
    image: '/food.jpg',
    content: 'As you lift a spoonful to your lips, the mingling aromas of fresh fruit tease your senses, promising a refreshing and nutritious experience. Whether enjoyed alone as a vibrant snack or paired with creamy yogurt for a delightful breakfast, this bowl is a testament to the simple joys of eating well.',
    author: 'Jenish Shrestha ',
    category: 'Food',
  },
  {
    id: 6,
    title: 'Classic Comfort',
    excerpt: 'Indulge in the timeless satisfaction of a juicy burger paired with crispy potato chips, blending savory flavors with crunchy textures',
    date: '2024-03-04',
    image: '/food2.jpg',
    content: 'Sink your teeth into a thick, succulent burger nestled between toasted buns, topped with melted cheese, crisp lettuce, and juicy tomatoes. Each bite offers a burst of savory goodness that satisfies even the heartiest appetite.',
    author: 'Zoe Adjonyoh',
    category: 'Food',
  },
  {
    id: 7,
    title: 'Tranquil Village Life',
    excerpt: 'Immerse yourself in the tranquil rhythms of village life.',
    date: '2022-11-04',
    image: '/lifestyle.jpg',
    content: 'Step into a world where time slows down, and the simplicity of rural living unfolds. In this picturesque village, cows graze peacefully on lush green pastures, their gentle movements echoing the tranquility of the countryside. Nearby, goats playfully hop between stone fences, adding a lively charm to the serene landscape.Life here revolves around the seasons, with villagers tending to their fields and gardens with care. The air is filled with the earthy scent of fresh hay and the distant murmur of a flowing stream. This is a place where the pace of life allows for moments of quiet reflection and appreciation for natures beauty.',
    author: 'James',
    category: 'Lifestyle',
  },
  {
    id: 8,
    title: 'Serenity in Solitude',
    excerpt: 'Embrace the quiet moments that define serenity in solitude, where every view is a reminder of life peaceful rhythms and the beauty found in simplicity',
    date: '2024-01-04',
    image: '/lifestyle2.jpg',
    content: 'Discover the epitome of tranquility nestled amidst rolling hills,where a solitary village house stands as a beacon of peaceful living. Surrounded by nature embrace, this humble abode offers a retreat from the hustle and bustle of modern life.Perched upon a gentle slope, the house blends harmoniously with its scenic backdrop, framed by lush greenery and distant hills that seem to stretch endlessly. Here, time moves at a leisurely pace, allowing for moments of quiet contemplation and connection with the natural rhythms of the land.',
    author: 'kalki',
    category: 'Lifestyle',
  },
  {
    id: 9,
    title: ' A Moment of Peace',
    excerpt: 'Discover tranquility as a man quietly sits in his chair, gazing out at the rolling hills and serene lake.',
    date: '2024-01-04',
    image: '/lifestyl.jpg',
    content: 'Nestled amidst serene rolling hills and beside a calm lake is a scene of quiet contemplation. Here, a solitary figure sits in a comfortable chair, taking in the expansive view before him. With each passing moment, he absorbs the peaceful atmosphere, feeling a deep connection with the natural world.The hills, dressed in various shades of green, are illuminated by the warm sunlight, creating a backdrop that breathes with life. The lake reflects the clear blue sky above, adding a reflective dimension to the scene. Birds soar gracefully in the sky, their calls blending with the soft rustling of leaves in the breeze.',
    author: 'Joy robby',
    category: 'Lifestyle',
  },
];

const blogsReducer = (state = initialBlogsState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      return [...state, action.payload];
    case EDIT_BLOG:
      return state.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      );
    case DELETE_BLOG:
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

const searchQueryReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};

const themeReducer = (state = 'light', action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  blogs: blogsReducer,
  searchQuery: searchQueryReducer,
  theme: themeReducer,
});

export default rootReducer;
