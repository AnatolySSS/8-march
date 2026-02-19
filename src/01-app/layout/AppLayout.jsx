import { useEffect, useState } from "react";
import { BackgroundVideo } from "@/03-widgets";
import styles from "./AppLayout.module.css";

export const AppLayout = ({ children }) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={styles.app}
        style={{
          filter: showIntro ? "blur(1px)" : "blur(0px)",
          transform: showIntro ? "scale(1.1)" : "scale(1)",
          opacity: showIntro ? 0 : 1,
          transition: "all 2s ease",
        }}
      >
        <div className={styles.appInner}>
          <div className={styles.appContent}>{children}</div>
        </div>
      </div>

      <BackgroundVideo />
    </>
  );
};
