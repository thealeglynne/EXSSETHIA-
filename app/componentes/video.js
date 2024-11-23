import React from "react";
import styles from "../style/video.css";

const VideoFullScreen = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.video}
        src="/public/videos/Viva.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default VideoFullScreen;
