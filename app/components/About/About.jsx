import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';
import styles from './About.module.css';
import Image from 'next/image';

function About() {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <section className={styles['about-section']}>
      <div className={styles.container}>
        <h1 className={styles.heading} data-aos='fade-down'>
          Our Services
        </h1>

        <div className={styles.services}>
          <div className={`${styles.service} ${styles['lg-xlg']}`} data-aos='fade-down'>
            <img src="/images/outdoor.jpg" alt="Outdoor Shoots" />
            <p>Outdoor Shots</p>
          </div>
          <div className={`${styles.service} ${styles['lg-xlg']}`} data-aos='fade-down' data-aos-delay='300'>
            <img src="/images/indoor.jpg" alt="Indoor Shots" />
            <p>Indoor Shots</p>
          </div>
          <div className={`${styles.service} ${styles['lg-xlg']}`} data-aos='fade-down' data-aos-delay='600'>
            <img src="/images/videography.jpg" alt="Videography Reels" />
            <p>Videography Reels</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
