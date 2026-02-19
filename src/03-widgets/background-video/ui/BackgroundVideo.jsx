import { getRandomBackgroundVideo } from "../lib/getRandomBackgroundVideo";
import { BACKGROUND_VIDEOS } from "../lib/constants";
import styles from "./BackgroundVideo.module.css";

export const BackgroundVideo = () => {
  const videoSrc = getRandomBackgroundVideo(BACKGROUND_VIDEOS);

  return (
    <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
      <source src={videoSrc} type="video/mp4" />
      Ваш браузер не поддерживает видео
    </video>
  );
};
