// src/components/Button.jsx
import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
