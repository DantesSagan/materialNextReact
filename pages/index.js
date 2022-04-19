import { Box, Typography } from '@mui/material';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Box className={styles.container} style={{ textAlign: 'center' }}>
      <Typography
        variant='h2'
        component='div'
        style={{
          marginLeft: '150px',
          marginRight: '150px',
          paddingTop: '200px',
        }}
      >
        Hello this is site for learning Material UI with using Next.js and
        React.js
      </Typography>
    </Box>
  );
}
