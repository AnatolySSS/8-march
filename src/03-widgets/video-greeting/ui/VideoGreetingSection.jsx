import { useState, useMemo } from "react";
import { getNextVideo } from "../lib/getNextVideo";
import posterImg from "../assets/video-poster.webp";
import { MAX_VIDEO_GREETING_COUNT } from "../lib/constants";
import styles from "./VideoGreetingSection.module.css";

export function VideoGreetingSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoNumber = useMemo(() => getNextVideo(MAX_VIDEO_GREETING_COUNT), []);

  return (
    <section className={styles.videoCard} aria-label="Видеопоздравление с 8 Марта">
      <div className={styles.videoCard__label}>
        <span>Видеопослание</span>
        <span className={styles.videoCard__status}>
          <span className={styles.videoCard__statusDot} />
          Готово к показу
        </span>
      </div>

      <div className={`${styles.videoCard__frame} ${isPlaying ? styles.playing : ""}`}>
        <video
          className={styles.videoCard__video}
          controls
          poster={posterImg}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={`/videos/video_${videoNumber}.mp4`} type="video/mp4" />
          Ваш браузер не поддерживает воспроизведение видео.
        </video>

        <div className={styles.videoCard__overlay} aria-hidden="true">
          <div className={styles.videoCard__overlayRing}>
            <div className={styles.videoCard__overlayRingInner}>
              <svg viewBox="0 0 24 24">
                <polygon points="9,7 17,12 9,17" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
