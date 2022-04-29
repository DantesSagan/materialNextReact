import { useState } from 'react';
import Footer from '../components/layout/footer';
import NavbarIndexTop from '../components/layout/muiNavbar';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';

import '../styles/globals.css';
// import Navbar from '../components/layout/navbar';
// import '../styles/navbar.css';

export default function MyApp({ Component, pageProps }) {
  const [checked, setChecked] = useState(true);
  const bgColor = checked ? 'white' : 'black';
  const color = checked ? 'black' : 'white';
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        style={{
          backgroundColor: bgColor,
          color: color,
          minHeight: '100vh',
        }}
      >
        <NavbarIndexTop checked={checked} setChecked={setChecked} />
        <div
          style={{
            textAlign: 'center',
            paddingBottom: '150px',
            paddingTop: '200px',
          }}
        >
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Component {...pageProps} checked={checked} setChecked={setChecked} />
          {/* </Suspense> */}
        </div>
        <Footer checked={checked} setChecked={setChecked} />
      </div>
    </LocalizationProvider>
  );
}
