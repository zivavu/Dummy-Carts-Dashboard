import React from 'react';
import styles from './SiteHeading.module.css';

const SiteHeading = () => {
  return (
    <header className={styles.siteHeading}>
      <h1
        style={{
          fontWeight: `600`,
          fontSize: `2.4rem`,
          margin: 0,
        }}>
        Dummy Carts Dashboard
      </h1>
      <h4
        style={{
          margin: 0,
          letterSpacing: `0.15rem`,
        }}>
        By Tomasz Kierzenkowski
      </h4>
    </header>
  );
};

export default SiteHeading;
