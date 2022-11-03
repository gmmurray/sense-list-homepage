import React, { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export default function Content({ children }: PropsWithChildren) {
  return <div className={styles.content}>{children}</div>;
}
