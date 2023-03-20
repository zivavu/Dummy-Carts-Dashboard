import React from 'react';
import styles from './NewCartDialog.module.css';
import { ClickAwayListenerProps } from './types';
const ClickAwayListener = ({ children, clickAwayHandler }: ClickAwayListenerProps) => {
  return (
    <div
      className={styles.clickAwayListener}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          clickAwayHandler();
        }
      }}>
      {children}
    </div>
  );
};

export default ClickAwayListener;
