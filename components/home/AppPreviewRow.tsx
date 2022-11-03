import AppPreview from './AppPreview';
import { IApp } from '../../types/app';
import React from 'react';
import styles from './styles.module.scss';

type Props = {
  apps: IApp[];
};

export default function AppPreviewRow({ apps }: Props) {
  return (
    <div className={styles['app-preview-row']}>
      {apps.map(app => (
        <AppPreview key={app.slug} app={app} />
      ))}
    </div>
  );
}
