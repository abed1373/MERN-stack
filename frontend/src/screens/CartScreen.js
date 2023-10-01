import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen() {
  const { slug } = useParams();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyInUrl = new URLSearchParams(search).get('qty');
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;

  useEffect(() => {
    dispatch(addToCart(slug, qty));
  }, [dispatch, qty, slug]);

  const removeFromCartHandler=(slug)=>{
dispatch(removeFromCart(slug))
  }

  const checkoutHandler=()=>{
navigate('/signin?redirect=shipping')
  }
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shoping Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shoping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item && item.image}
                      alt={item && item.name}
                      className="small"
                    />
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>
                      {item && item.name}
                    </Link>
                  </div>
                  <div>
                    <select
                      value={item && item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product,Number(e.target.value))
                          
                        )
                      }
                    >
                      {[...Array(item && item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item && item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
            <h3>
        Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
        :
         $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
      </h3>
            </li>
            <li>
              <button
              type='button'
              onClick={checkoutHandler}
              className='primary block'
              disabled={cartItems.length === 0}
              >Proceed to Checkout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
