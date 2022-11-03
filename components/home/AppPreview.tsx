/* eslint-disable @next/next/no-img-element */

import { IApp } from '../../types/app';
import Link from 'next/link';
import React from 'react';
import { getAppPreviewBackground } from '../../util/colorHelpers';
import { getAppRoute } from '../../util/getAppRoute';
import styles from './styles.module.scss';

type Props = {
  app: IApp;
};

export default function AppPreview({ app }: Props) {
  const background = getAppPreviewBackground(app.colors);
  return (
    <div className={styles['app-preview-container']}>
      <div className={styles['content']} style={{ background }}>
        <div className={styles['card']}>
          <div>
            <img src={app.logo} height="60" width="60" alt={app.name} />
          </div>
          <div>
            <h3>{app.name}</h3>
          </div>
          <div>
            <Link href={getAppRoute(app)} className="secondary-button">
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
