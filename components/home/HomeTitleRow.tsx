import React from 'react';
import styles from './styles.module.scss';

export default function HomeTitleRow() {
  return (
    <div className={styles['title-row']}>
      <div>
        <h1>Sense List</h1>
        <h5>Sensible list apps for every occasion</h5>
      </div>
    </div>
  );
}
