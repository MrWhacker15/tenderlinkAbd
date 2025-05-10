// src/components/Input.jsx
import React from 'react';

const Input = ({ id, name, value, onChange, type = 'text', placeholder = '', className = '' }) => {
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={`input ${className}`}
    />
  );
};

export { Input };
