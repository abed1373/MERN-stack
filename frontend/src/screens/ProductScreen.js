import React, { useEffect, useState } from 'react';

import { Link, useNavigate,  useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const {slug}=useParams()
  
  const [qty,setQty]=useState(1)
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  console.log(productDetails)

  useEffect(() => {
    dispatch(detailsProduct(slug));
  }, [dispatch, slug]);

  const addToCartHandler=()=>{
navigate(`/cart/${slug}?qty=${qty}`)
  }

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link className="link" to={'/'}>
            Back to Home
          </Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={product&&product.image} alt={product&&product.name} />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product&&product.name}</h1>
                </li>

                <li>
                  <Rating
                    rating={product&&product.rating}
                    numReviews={product&&product.numReviews}
                  />
                </li>
                <li>
                  <h4>Description:</h4>
                  <p> {product?.description}</p>
                </li>
                <li>
                  <img className="small" src={product&&product.image} alt="" />
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>{product?.brand}</li>
                  <li>
                    <Rating
                      rating={product?.rating}
                      numReviews={product&&product.numReviews}
                    />
                  </li>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product&&product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product&& product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                {product.countInStock > 0 && (
                  <>
                  <li>
                    <div className="row">
                      <div>Qty</div>
                      <div>
                        <select
                        value={qty}
                        onChange={e=>setQty(e.target.value)}
                        >
                      {[...Array(product.countInStock).keys()].map(
                        (x)=>(
                          <option key={x+1} value={x+1}>{x+1}</option>
                        )
                      )}
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                  <button onClick={addToCartHandler} className="primary block">Add To Cart</button>
                  </li>
                  </>
                )

                }
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
