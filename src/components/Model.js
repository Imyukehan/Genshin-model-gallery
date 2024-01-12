// Model.js
import React from 'react';

const Model = ({ src, alt }) => {
  return (
      <img src={src} alt={alt} data-hires-status="pending"/>
  );
};

export default Model;