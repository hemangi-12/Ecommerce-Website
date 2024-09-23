// OrderSuccess.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './orderSuccess.css';

const OrderSuccess = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const viewOrderHistory = () => {
    navigate('/order-history');
  };

  return (
    <div className="order-success">
      <div className="success-message">
        <h1>Order Successful!</h1>
        <p>Thank you for your purchase! Your order has been placed successfully.</p>
        <img src="https://example.com/success-icon.png" alt="Success" />
        <div className="success-actions">
          <button className="btn" onClick={goToHome}>Go to Home</button>
          <button className="btn" onClick={viewOrderHistory}>View Order History</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
