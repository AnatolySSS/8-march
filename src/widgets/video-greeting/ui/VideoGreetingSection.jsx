export function VideoGreetingSection() {
  return (
    <section
      className="video-card"
      aria-label="Видеопоздравление с 8 Марта"
    >
      <div className="video-card__label">
        <span>Видеопослание</span>
        <span className="video-card__status">
          <span className="status-dot" />
          Готово к показу
        </span>
      </div>

      <div className="video-card__frame">
        <video
          className="video-card__video"
          controls
          poster="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=1200"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Ваш браузер не поддерживает воспроизведение видео.
        </video>
        {/* <iframe
          className="video-card__video"
          src="https://www.youtube.com/embed/aEFCUtv0DF0"
          title="Видеопоздравление"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}

        <div className="video-card__overlay" aria-hidden="true">
          <div className="video-card__overlay-ring">
            <div className="video-card__overlay-ring-inner">
              <svg viewBox="0 0 24 24">
                <polygon points="9,7 17,12 9,17" />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

