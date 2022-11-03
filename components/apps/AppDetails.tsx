/* eslint-disable @next/next/no-img-element */

import { IApp } from '../../types/app';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

type Props = {
  app: IApp;
};

export default function AppDetails({ app }: Props) {
  return (
    <div className={styles['details-container']}>
      <div className={styles['row']}>
        <div className={styles['logo-container']}>
          <img src={app.logo} alt={app.name} className={styles['logo']} />
        </div>
        <div className={styles['content-container']}>
          <h1>{app.name}</h1>
          <p>{app.description}</p>
          <a
            href={app.url}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Check it out
          </a>
          <Link href="/" className={`secondary-button ${styles.button}`}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
