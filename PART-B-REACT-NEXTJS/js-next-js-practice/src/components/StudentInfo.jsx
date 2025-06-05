"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/components.module.css';   

export default function StudentInfo({ setName }) {
   const [studentInfo, setStudentInfo] = useState({
      name: '',
      age: '',
      course: '',
      email: ''
   });
   const [submitted, setSubmitted] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setStudentInfo(prev => ({
         ...prev,
         [name]: value
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!studentInfo.name.trim()) {
         alert('Please enter a name');
         return;
      }
      setName(studentInfo.name);
      setSubmitted(true);
   };

   return (
      <div className={styles.card}>
         <div className={styles.logoWrapper}>
            <Image src="/images/buck_yourself.png" alt="Buck Logo" width={100} height={100} className={styles.logoImg} priority />
         </div>
         <h2>Student Information</h2>
         <div className={styles.flexRow}>
            {/* Preview Card */}
            <div className={styles.preview}>
               <h3>Student Preview</h3>
               <div className={styles.previewContent}>
                  <div className={styles.previewItem}>
                     <strong>Name:</strong>
                     <p>{studentInfo.name || <span className={styles.placeholder}>Enter your name...</span>}</p>
                  </div>
                  <div className={styles.previewItem}>
                     <strong>Age:</strong>
                     <p>{studentInfo.age || <span className={styles.placeholder}>Enter your age...</span>}</p>
                  </div>
                  <div className={styles.previewItem}>
                     <strong>Course:</strong>
                     <p>{studentInfo.course || <span className={styles.placeholder}>Enter your course...</span>}</p>
                  </div>
                  <div className={styles.previewItem}>
                     <strong>Email:</strong>
                     <p>{studentInfo.email || <span className={styles.placeholder}>Enter your email...</span>}</p>
                  </div>
                  <div className={styles.previewItem}>
                     <strong>Status:</strong>
                     <p>{submitted ? 'Submitted' : 'Not Submitted'}</p>
                  </div>
               </div>
            </div>

            {/* Input Form */}
            <form className={styles.form} onSubmit={handleSubmit}>
               <div className={styles.inputGroup}>
                  <label htmlFor="name">Student Name:</label>
                  <input
                     id="name"
                     name="name"
                     type="text"
                     placeholder="Enter your name"
                     value={studentInfo.name}
                     onChange={handleChange}
                  />
               </div>
               <div className={styles.inputGroup}>
                  <label htmlFor="age">Age:</label>
                  <input
                     id="age"
                     name="age"
                     type="number"
                     placeholder="Enter your age"
                     value={studentInfo.age}
                     onChange={handleChange}
                  />
               </div>
               <div className={styles.inputGroup}>
                  <label htmlFor="course">Course:</label>
                  <input
                     id="course"
                     name="course"
                     type="text"
                     placeholder="Enter your course"
                     value={studentInfo.course}
                     onChange={handleChange}
                  />
               </div>
               <div className={styles.inputGroup}>
                  <label htmlFor="email">Email:</label>
                  <input
                     id="email"
                     name="email"
                     type="email"
                     placeholder="Enter your email"
                     value={studentInfo.email}
                     onChange={handleChange}
                  />
               </div>
               <button type="submit">Submit</button>
            </form>
         </div>
      </div>
   );
}