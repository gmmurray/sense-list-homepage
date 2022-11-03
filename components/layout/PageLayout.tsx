import React, { PropsWithChildren } from 'react';

import Content from './Content';
import Footer from './Footer';
import Head from 'next/head';
import styles from './styles.module.scss';

type Props = {
  title: string;
} & PropsWithChildren;

export default function PageLayout({ title, children }: Props) {
  return (
    <div className={styles.page}>
      <Head>
        <title>{title}</title>
      </Head>
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
