import React from 'react';
import styles from './NewCartDialog.module.css';
import { NewCartDialogProps } from './types';

const NewCartDialog = ({ setShowModal }: NewCartDialogProps) => {
  return (
    <div
      className={styles.clickAwayListener}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowModal(false);
        }
      }}>
      <div className={styles.newCartFormContainer}>NewCartDialog</div>
    </div>
  );
};

export default NewCartDialog;
