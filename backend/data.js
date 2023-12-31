import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'abed',
      email: 'abed@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'john',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2',
      price: 100,
      countInStock: 20,
      brand: 'Adidas',
      rating: 1,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Lacoste Free Shirt',
      slug: 'lacoste-free-shirt',
      category: 'Shirts',
      image: '/images/p3',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 2,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/pant3',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Adidas Slim Pant',
      slug: 'adidas-slim-pant',
      category: 'Pants',
      image: '/images/pant1',
      price: 68,
      countInStock: 5,
      brand: 'Adidas',
      rating: 2.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Lee Slim Pant',
      slug: 'lee-slim-pant',
      category: 'Pants',
      image: '/images/pant2',
      price: 55,
      countInStock: 10,
      brand: 'Lee',
      rating: 4,
      numReviews: 11,
      description: 'high quality product',
    },
  ],
};

export default data;
