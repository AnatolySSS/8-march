import { useState } from 'react'
import { HolidayLandingPage } from './pages/holiday-landing/ui/HolidayLandingPage.jsx'
import { randNumber } from './widgets/video-greeting/lib/randNumber.js';

function App() {
  const [showIntro, setShowIntro] = useState(true)

  setTimeout(() => {
    setShowIntro(false);
  }, 1000);

  return (
    <>
      <div className="app" style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 1s ease' }}>
        <div className="app__inner">
          <div className="app__content">
            <HolidayLandingPage />
          </div>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={`/background_${randNumber(2)}.mp4`} type="video/mp4" />
        Ваш браузер не поддерживает видео
      </video>
    </>
  )
}

export default App
