import React from 'react';
import '../style/videoP.css'; // Importa el archivo CSS

const LoopingVideo = () => {
  return (
    <div className="video">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/9f7Usujg6ms?autoplay=1&mute=1&loop=1&playlist=9f7Usujg6ms"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
  );
};

export default LoopingVideo;