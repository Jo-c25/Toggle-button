import { useState } from 'react'
import './App.css'
import Toggle from './Toggle-button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toggle />
      
    </>
  )
}

export default App
