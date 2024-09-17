import React, { useState } from 'react';
import './CartSection.css';
import CartComponent from '../CartComponent/CardC';
const TopBarSection = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <div className="topbar-container">
{
  isCartOpen ? <CartComponent  CardOpen={setIsCartOpen} /> : null
}      
      <div className="topbar-left">
        <span>LOG IN</span>
        <span>JOIN</span>
      </div>

      <div className="right">
        <div className="social-icons">
          <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
            <img src='https://cdn-icons-png.flaticon.com/128/6422/6422199.png'
              alt='facebook icon'
              className='social-media-icon' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <img src='https://cdn-icons-png.flaticon.com/128/6422/6422200.png'
              alt='instagram icon'
              className='social-media-icon' />
          </a>
        </div>
        <span className='price'>RS. 0.00</span>

        <span onClick={() => setSelectedCategory('Cart')}>
          <img src='https://cdn-icons-png.flaticon.com/128/3916/3916624.png'
            alt='cart icon'
            className='social-media-icon' />
        </span>
      </div>

      {/* Cart Menu */}
      <div className={`topbar-cart-menu ${isCartOpen ? 'topbar-cart-menu-open' : ''}`}>
        <p>Your cart is empty</p>
      </div>
    </div>
  );
};

export default TopBarSection;
