import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisiNav from './components/DaisiNav/DaisiNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <DaisiNav></DaisiNav>
        <h1 className='text-4xl bg-red-600'>Vite + React</h1>
      </div>
    </>
  )
}

export default App
