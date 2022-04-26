import { Button } from '@mui/material';
import React from 'react';
import styles from '../../styles/Home.module.css';

export default function Footer({ checked, setChecked }) {
  const footerBg = checked ? 'white' : 'black';
  const footerText = checked ? 'black' : 'white';
  return (
    <footer className={styles.shadow} style={{ textAlign: 'center' }}>
      <div
        style={{
          bottom: 0,
          position: 'fixed',
          left: 0,
          right: 0,
          color: footerText,
          backgroundColor: footerBg,
          padding: '15px',
          boxShadow: '1px -1.5px 10px black',
          border: '1px solid',
          borderColor: footerText,
        }}
      >
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <Button>
            <a href='https://github.com/DantesSagan'>@DantesSagan</a>
          </Button>
        </a>
      </div>
    </footer>
  );
}
