import { Image } from '@mui/icons-material';
import React from 'react';
import styles from '../../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} style={{ textAlign: 'center' }}>
      <div style={{ bottom: 0, position: 'absolute', left: 0, right: 0 }}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </div>
    </footer>
  );
}
