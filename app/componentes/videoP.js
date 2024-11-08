import React from 'react';
import styles from '../style/videoP.css'; // Importa el archivo CSS

const LoopingVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.video}
      >
        <source src="https://youtu.be/q40oimgnN00" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoopingVideo;