// Model.js
import React from 'react';

const Model = ({ src, alt }) => {
  return (
    <div className="model">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Model;