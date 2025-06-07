"use client";
import {useState} from 'react';
import styles from '../styles/components.module.css';
import WelcomeCard from '../components/WelcomeCard';
import Counter from '../components/Counter';
import StudentInfo from '../components/StudentInfo';
import TabControl from "../components/TabControl";


export default function Home() {
  const [name, setName] = useState('Student');

  return (
    <main>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <WelcomeCard name={name} className={styles.fullWidth}/>
        <StudentInfo setName={setName} />
        <TabControl
        className={styles.fullWidth}
          tabs={[
            { label: "Counter", content: <Counter /> },
            { label: "Student Info", content: <StudentInfo /> },
          ]}
        />
      </div>
    </main>
  );
}