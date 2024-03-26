import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar home="Akbar"/>
      <Navbar home="Saeed"/>
      <Navbar home="Ali"/>
      <Navbar home="Khan"/>
      <h1 classNameName='bg-green-300 text-black'>Tailwind testing</h1>

      


    </>
  )
}

export default App
