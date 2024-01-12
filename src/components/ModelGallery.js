// ModelGallery.js
import React from 'react';
import Model from './Model';
import photo from '../assets/images/Eula.jpeg'; // 导入照片路径数组
import plane from '../assets/models/Eula.usdz'

const ModelGallery = () => {
  return (
    <div className="model-gallery">
      <a rel="ar" href={plane}>
        <Model src={photo} alt={photo.alt}/>
      </a>
    </div>
  );
};

export default ModelGallery;