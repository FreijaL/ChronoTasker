import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Backlog from './components/Backlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>whalecum to!</h2>
      <h1>chronoTasker</h1>
      <Backlog/>
    </div>
  )
}

export default App
