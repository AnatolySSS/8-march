import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <header className={styles.hero}>
      <p className={styles.heroTagline}>
        <span className={styles.heroTagline__dot} />
        8&nbsp;Марта — повод сказать важное
      </p>

      <h1 id="page-title" className={styles.heroTitle}>
        Видеопоздравление
        <br />
        <span>с 8&nbsp;Марта</span>
      </h1>

      <p className={styles.heroSubtitle}>
        Поздравляем вас с Международным женским днём и благодарим за профессионализм, внимание к людям и ту опору,
        которую вы создаёте каждый день.
      </p>

      <p className={styles.heroNote}>
        Пусть вокруг будет больше красоты, честности и спокойствия, а рядом — люди, которые по-настоящему вас ценят.
      </p>
    </header>
  );
}
