import React from 'react';
import '../styles/Cart.css';  // Add your custom CSS for Cart

import axios from 'axios';

const Cart = ({ cartItems, onRemoveItem }) => {
  // Calculate the total price of all items in the cart
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Generate a comma-separated list of all sauce names in the cart
  const itemNames = cartItems.map(item => item.title).join(', ');

  const handlePayment = async () => {
    try {
      const response = await axios.post(process.env.REACT_APP_RAZORPAY_URL, {
        amount: totalAmount
      });
      const { orderId, amount } = response.data;

      const options = {
        key: "rzp_test_LVMfEY3Rs5STmn",
        amount: amount,
        currency: "INR",
        name: "Payment",
        description: `Payment for: ${itemNames}`,
        order_id: orderId,
        handler: async function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "Hardeepak Singh",
          email: "Hardeepak78@gmail.com",
          contact: "9998889898",
        },
        theme: {
          color: "#2c3e50"
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add some items!</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="product-image" />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>Price: ₹{item.price}</p>
                </div>
                <button onClick={()=>{onRemoveItem(item.id)}} className="remove-item">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p><strong>Total Amount: ₹{totalAmount}</strong></p>
            <button onClick={handlePayment} className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
