import { useState } from 'react';
import Footer from '../components/layout/footer';
import Navbar from '../components/layout/navbar';
import '../styles/globals.css';
import '../styles/navbar.css';

export default function MyApp({ Component, pageProps }) {
  const [checked, setChecked] = useState(false);
  const bgColor = checked ? 'black' : 'white';
  const color = checked ? 'white' : 'black';
  return (
    <div style={{ backgroundColor: bgColor, color: color }}>
      <Navbar  color={color} />
      <div style={{ minHeight: '100vh', textAlign: 'center' }}>
        <Component {...pageProps} checked={checked} setChecked={setChecked} />
      </div>
      <Footer />
    </div>
  );
}
