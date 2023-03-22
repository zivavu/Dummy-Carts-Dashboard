import React from 'react';
import TrashCanSVG from '../../assets/trash-can.svg';
import styles from './CartsList.module.css';
import ListItem from './ListItem/ListItem';
import { CartsListProps, ISortBy } from './types';

import SortArrows from './SortArrows/SortArrows';

const CartsList = ({ carts, setCarts, selectedCart, setSelectedCart }: CartsListProps) => {
  const [sortBy, setSortBy] = React.useState<ISortBy>({ field: 'id', dir: 'asc' });

  const sortedValues = () => {
    return carts.sort((a, b) => {
      if (sortBy.dir === 'asc') {
        return a[sortBy.field] > b[sortBy.field] ? -1 : 1;
      } else {
        return a[sortBy.field] < b[sortBy.field] ? -1 : 1;
      }
    });
  };

  return (
    <aside className={styles.list}>
      <h2 className={styles.listTitle}>Your Carts</h2>
      <div className={styles.listHeader}>
        <span className={`${styles.firstColumn} ${styles.coulmn}`}>
          <span>ID</span>
          <SortArrows field="id" sortBy={sortBy} setSortBy={setSortBy} />
        </span>
        <span className={`${styles.secondColumn} ${styles.coulmn}`}>
          <span>Total Price</span>
          <SortArrows field="total" sortBy={sortBy} setSortBy={setSortBy} />
        </span>
        <span className={`${styles.thirdColumn} ${styles.coulmn}`}>
          <span>Discounted To</span>
          <SortArrows field="discountedTotal" sortBy={sortBy} setSortBy={setSortBy} />
        </span>
      </div>
      <div className={styles.listContent}>
        {sortedValues().map((cart) => {
          return (
            <ListItem
              key={cart.id}
              cart={cart}
              carts={carts}
              setCarts={setCarts}
              selectedCart={selectedCart}
              setSelectedCart={setSelectedCart}></ListItem>
          );
        })}
      </div>
    </aside>
  );
};

export default CartsList;
