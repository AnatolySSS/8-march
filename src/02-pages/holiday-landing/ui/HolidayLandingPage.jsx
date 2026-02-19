import { VideoGreetingSection } from "@/03-widgets/video-greeting";
import { HeroSection } from "@/03-widgets/hero-section";
import { GratitudeSection } from "@/03-widgets/gratitude-section";
import { PageFooter } from "@/03-widgets/page-footer";
import styles from "./HolidayLandingPage.module.css";

export function HolidayLandingPage() {
  return (
    <main className={styles.page} aria-labelledby="page-title">
      <section className={styles.pageGrid}>
        <HeroSection />
        <VideoGreetingSection />
      </section>

      <GratitudeSection />
      <PageFooter />
    </main>
  );
}
