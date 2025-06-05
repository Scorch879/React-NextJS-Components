// Counter.jsx
"use client";
import { useState } from 'react';
import styles from '../styles/components.module.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.card}>
      <h2>Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}