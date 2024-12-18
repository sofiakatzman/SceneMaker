import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <p className="text-3xl font-color underline">This is my react project</p>
        <button 
                onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>

    </>
  )
}

export default App
