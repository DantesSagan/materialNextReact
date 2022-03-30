import Navbar from '../components/layout/navbar';
import '../styles/globals.css';
import '../styles/navbar.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: '50vh' }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
