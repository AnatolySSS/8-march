import styles from "./PageFooter.module.css";

export function PageFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <span className={styles.footer__noteStrong}>С уважением, мужчины Службы финансового уполномоченного.</span>
      </div>
    </footer>
  );
}
