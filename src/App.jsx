import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p class="text-3xl font-bold underline">
          Hello world!
        </p>
      </div>
    </>
  )
}

export default App
