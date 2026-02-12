import { VideoGreetingSection } from '../../../widgets/video-greeting/ui/VideoGreetingSection.jsx'
import { HeroSection } from '../../../widgets/hero-section/ui/HeroSection.jsx'
import { GratitudeSection } from '../../../widgets/gratitude-section/ui/GratitudeSection.jsx'
import { PageFooter } from '../../../widgets/page-footer/ui/PageFooter.jsx'

export function HolidayLandingPage() {
  return (
    <main className="page" aria-labelledby="page-title">
      <section className="page__grid">
        <HeroSection />
        <VideoGreetingSection />
      </section>

      <GratitudeSection />
      <PageFooter />
    </main>
  )
}

