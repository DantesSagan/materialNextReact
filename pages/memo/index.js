/* eslint-disable react/display-name */
import { useState, memo } from 'react';

export default function App() {
  let [color, setColor] = useState('red');
  return (
    <>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <ExpensiveTree />
    </>
  );
}

const ExpensiveTree = memo(() => {
  let now = Date.now();
  while (Date.now() - now < 100) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.</p>;
});
