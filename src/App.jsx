import { useState } from 'react' 
import './App.css'

function App() { 
  const [count, setCount] = useState(0);
  return (
    <> 
      <button onClick={e => setCount(count+1)}>Click me {count}</button>
    </>
  )
}

export default App
