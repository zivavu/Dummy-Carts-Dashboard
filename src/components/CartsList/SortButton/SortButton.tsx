import React from 'react';

import { SortButtonProps } from '../types';
import SortAsc from './../../../assets/sortArrows/sort-asc.svg';
import SortDesc from './../../../assets/sortArrows/sort-desc.svg';
import styles from './../CartsList.module.css';

const SortButton = ({ field, sortBy, setSortBy }: SortButtonProps) => {
  const active = sortBy.field === field;

  const swapDir = (dir: 'asc' | 'desc') => {
    return dir === 'asc' ? 'desc' : 'asc';
  };

  const handleSortChange = () => {
    if (active) setSortBy({ field, dir: swapDir(sortBy.dir) });
    else setSortBy({ field, dir: 'asc' });
  };

  return (
    <button
      className={`${styles.sortButton} ${active && styles.active}`}
      onClick={handleSortChange}>
      <img
        src={active && sortBy.dir === 'desc' ? SortDesc : SortAsc}
        alt="Trash can"
        className={styles.deleteSVG}
        style={{ width: `100%` }}></img>
    </button>
  );
};

export default SortButton;
