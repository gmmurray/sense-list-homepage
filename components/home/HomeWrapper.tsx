import React, { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export default function HomeWrapper({ children }: PropsWithChildren) {
  return <div className={styles.home}>{children}</div>;
}
