import styles from "./GratitudeSection.module.css";

export function GratitudeSection() {
  return (
    <section aria-label="Текстовое поздравление и пожелания" className={styles.gratitudeSection}>
      <div className={styles.quoteBlock}>
        <p>Для просмотра других поздравлений обновите страницу 😉</p>
      </div>
    </section>
  );
}
