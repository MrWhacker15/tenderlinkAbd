// src/components/Textarea.jsx
import React from 'react';

const Textarea = ({ id, name, value, onChange, placeholder = '', className = '' }) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`textarea ${className}`}
    />
  );
};

export { Textarea };
