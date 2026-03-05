import styles from "./GratitudeSection.module.css";

export function GratitudeSection() {
  return (
    <section aria-label="Текстовое поздравление и пожелания" className={styles.gratitudeSection}>
      <div className={styles.quoteBlock}>
        <p>Для просмотра новых поздравлений обновите страницу 😉</p>
        {/* <p className={styles.quoteBlockAccent}>
          Пусть в вашей жизни будет больше любви, уважения, поддержки и поводов для радости.
        </p>
        <p>Спасибо за ваш труд, заботу и выдержку. С 8&nbsp;Марта!</p> */}
      </div>
    </section>
  );
}
