import React from 'react';
import '../styles/Shop.css';

const Shop = ({ handleClick, list, handleOpenModal }) => {
  return (
    <div className="shop">
      {list.map((item) => (
        <div className="product-card" key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            className="product-image"
            onClick={() => handleOpenModal(item)}
          />
          <h3>{item.title}</h3>
          <p>Rs {item.price}</p>
          <button className="add-to-cart-btn" onClick={() => handleClick(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
