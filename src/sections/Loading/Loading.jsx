// src/components/Loading.js
import React from 'react';
import './Loading.css';
import loadingGif from '../../assets/Loading.gif'; // Import the GIF

const Loading = () => {
  return (
    <div className="loading-screen">
      <img src={loadingGif} alt="Loading..." className="loading-gif" />
    </div>
  );
};

export default Loading;
