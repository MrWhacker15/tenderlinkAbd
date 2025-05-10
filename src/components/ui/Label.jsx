// src/components/Label.jsx
import React from 'react';

const Label = ({ htmlFor, children, className = '' }) => {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      {children}
    </label>
  );
};

export { Label };
