import { FaGithub } from 'react-icons/fa';
import React from 'react';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.github}>
        <a href="https://github.com/gmmurray" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className={styles.copyright}>
        <p>Copyright© {new Date().getFullYear()} Greg Murray</p>
      </div>
    </div>
  );
}
