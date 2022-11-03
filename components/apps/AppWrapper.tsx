import React, { PropsWithChildren } from 'react';

import { getAppPreviewBackground } from '../../util/colorHelpers';
import styles from './styles.module.scss';

type Props = {
  colors: {
    primary: string;
    secondary: string;
  };
} & PropsWithChildren;

export default function AppWrapper({ colors, children }: Props) {
  const background = getAppPreviewBackground(colors);

  return (
    <div className={styles.wrapper} style={{ background }}>
      {children}
    </div>
  );
}
