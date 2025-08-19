import React from 'react';
import ServiceHero from '../../components/ServiceHero';
import styles from '../../styles/Services.module.css';


const WebDevelopment = () => {
  return (
    <div className={styles.servicePage}>
      <ServiceHero 
        title="Web Development"
        subtitle="Build powerful, scalable web applications"
        bgColor="#6366f1"
      />
      
      <div className={styles.serviceContent}>
        <section>
          <h2>Custom Web Solutions</h2>
          <p>
            We create bespoke web applications tailored to your specific business requirements. 
            Our team specializes in modern JavaScript frameworks like React, Next.js, and Node.js.
          </p>
        </section>

        <section>
          <h3>Our Approach</h3>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <h4>Discovery Phase</h4>
              <p>We analyze your needs and create detailed specifications</p>
            </div>
            <div className={styles.feature}>
              <h4>Agile Development</h4>
              <p>Iterative development with continuous feedback</p>
            </div>
            <div className={styles.feature}>
              <h4>Quality Assurance</h4>
              <p>Rigorous testing at every development stage</p>
            </div>
          </div>
        </section>

        <section  className={styles.technologies}>
          <h3>Technologies We Use</h3>
          <div className={styles.techStack}>
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>TypeScript</span>
            <span>GraphQL</span>
            <span>MongoDB</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDevelopment;