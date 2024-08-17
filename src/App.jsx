import React, { useState } from 'react';
import './App.css';

let App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={e => setCount(count+1)}>Count {count}</button>
    </>
  )
}

export default App;
