"use client";
import {useState} from 'react';
import styles from '../styles/components.module.css';
import WelcomeCard from '../components/WelcomeCard';
import Counter from '../components/Counter';
import StudentInfo from '../components/StudentInfo';

export default function Home() {

  const [name, setName] = useState('Student');

  return (
    <main className={styles.mainBg}>
      <WelcomeCard name={name}/>
      <Counter />
      <StudentInfo setName={setName}/>
    </main>
  );
}