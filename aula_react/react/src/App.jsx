import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Teste from './components/Teste'
import ChildComponent from './components/ChildComponent'
import EventComponent from './components/EventComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1> aulas</h1>
      <Teste/>
      <ChildComponent/>
      <EventComponent/>
    </>
  )
}

export default App
