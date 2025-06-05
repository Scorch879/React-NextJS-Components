"use client";
import styles from '../styles/components.module.css';

export default function WelcomeCard({name}) {
    return (
        <div className={`${styles.card} ${styles.welcomeCard}`}>
            <h2>Welcome, {name}!</h2>
            <p> We are glad to have you here and visit our page!! Thank you.</p>
            </div>
    );
}