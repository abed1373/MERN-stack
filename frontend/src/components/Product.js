import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

export default function Product(props) {
    const {product}=props
  return (
    <div  className="card">
    <Link to={`/product/${product.slug}`}>
      <img
        className="img-size"
        src={product.image}
        alt={product.name}
      />
    </Link>
    <div className="card-body">
      <Link to={`/product/${product.slug}`}>
        <h2>{product.name}</h2>
      </Link>
     <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
      <div className="price">${product.price}</div>
    </div>
  </div>
  )
}
