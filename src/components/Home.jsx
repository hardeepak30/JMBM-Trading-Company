import React from 'react';
import '../styles/Home.css';  // Custom CSS for the Home page
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate('/products')
    }

  return (
      <div className="home">
        <Navbar/>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-text">
          <h1>Welcome to JMBM Trading Company</h1>
          <p>Explore a world of rich, flavorful sauces for every dish</p>
          <button onClick={handleClick} className="shop-now-btn">Shop Now</button>
        </div>
      </header>

      {/* Sauce Categories */}
      <section className="categories">
        <h2>Explore Our Sauce Categories</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src="https://pngimg.com/d/sauce_PNG110.png" alt="Spicy Sauces" />
            <h3>Spicy Sauces</h3>
          </div>
          <div className="category-card">
            <img src="https://pngimg.com/d/sauce_PNG110.png" alt="Sweet Sauces" />
            <h3>Sweet Sauces</h3>
          </div>
          <div className="category-card">
            <img src="https://pngimg.com/d/sauce_PNG110.png" alt="Barbecue Sauces" />
            <h3>Barbecue Sauces</h3>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Sauces</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src="https://pngimg.com/d/sauce_PNG110.png" alt="Hot Sauce" />
            <h3>Inferno Hot Sauce</h3>
            <p>Rs 1299</p>
            <button className="view-details-btn">View Details</button>
          </div>
          <div className="product-card">
            <img src="https://pngimg.com/d/sauce_PNG110.png" alt="BBQ Sauce" />
            <h3>Smokey BBQ Sauce</h3>
            <p>Rs 999</p>
            <button className="view-details-btn">View Details</button>
          </div>
          <div className="product-card">
            <img src="https://pngimg.com/d/sauce_PNG110.png" alt="Sweet Sauce" />
            <h3>Golden Honey Sauce</h3>
            <p>Rs 899</p>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About JMBM Trading Company</h2>
        <p>
          At JBMB Trading Company, we believe that the perfect sauce can make any meal memorable. Our sauces are crafted with love and high-quality ingredients to bring flavor and excitement to your cooking.
        </p>
      </section>

      {/* Special Promotions */}
      <section className="special-promotions">
        <h2>Special Promotions</h2>
        <div className="promotion-cards">
          <div className="promotion-card">
            <h3>Buy 2 Get 1 Free on All Spicy Sauces!</h3>
            <p>Hurry, offer ends soon!</p>
            <button className="shop-now-btn">Shop Spicy Sauces</button>
          </div>
          <div className="promotion-card">
            <h3>10% Off Your First Order</h3>
            <p>Sign up for our newsletter to claim your discount</p>
            <button className="cta-btn">Sign Up Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
