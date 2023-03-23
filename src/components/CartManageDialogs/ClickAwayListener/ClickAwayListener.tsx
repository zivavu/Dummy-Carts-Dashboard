import React from 'react';
import { ClickAwayListenerProps } from '../types';
import styles from './ClickAwayListener.module.css';
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
