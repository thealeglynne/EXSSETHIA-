import React from "react";
import "../style/videoP.css"; // Asegúrate de incluir estilos personalizados

const VideoP = () => {
  return (
    <div className="video-container">
      <div className="video-overlay">
        <h1 className="video-title">Bienvenidos a Lumina</h1>
        <p className="video-subtitle">Descubre la belleza que te hace única.</p>
      </div>
      <video
        className="video-frame"
        src="/video/BEA.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default VideoP;
