"use client";
import styles from '../styles/components.module.css';

export default function WelcomeCard({ name, className }) {
  return (
    <div className={`${styles.card} ${styles.welcomeCard} ${className || ""}`}>
      <h2>Welcome, {name}!</h2>
      <p> We are glad to have you here and visit our page!! Thank you.</p>
    </div>
  );
}