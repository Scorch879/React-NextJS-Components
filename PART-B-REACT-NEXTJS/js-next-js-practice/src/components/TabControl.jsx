import React, { useState } from "react";
import styles from "../styles/components.module.css";

export default function TabControl({ tabs, className }) {
  const [active, setActive] = useState(0);

  return (
    <div className={`${styles.tabControl} ${className || ""}`}>
      <div className={styles.tabList}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`${styles.tabButton} ${active === idx ? styles.activeTab : ""}`}
            onClick={() => setActive(idx)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabPanel}>{tabs[active].content}</div>
    </div>
  );
}