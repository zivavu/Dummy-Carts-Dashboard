import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import NewCartDialog from '../CartManageDialogs/NewCartDialog/NewCartDialog';
import styles from './SiteHeading.module.css';
import { SiteHeadingProps } from './types';

const SiteHeading = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.siteHeading}>
      <div>
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
      </div>
      <button
        className={styles.newCartButton}
        onClick={() => {
          setShowModal(true);
        }}>
        <span style={{ textTransform: `none` }}>Add a new cart</span>
      </button>
      {showModal && createPortal(<NewCartDialog setShowModal={setShowModal} />, document.body)}
    </header>
  );
};

export default SiteHeading;
