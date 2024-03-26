import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue =()=>{
    if (count >= 0 && count < 20){
      
      setCount(count +1)
    }
  }

  const lessValue =()=>{
    if (count > 0 && count <= 20){
      
      setCount(count -1)
    }
  }

  return (
    <>
      <h1>chai or react (Akbar)</h1>
      <h2>The value of couter is {count}</h2>
      <button
      onClick={addValue}
      >Add </button>
      <br />
      <br />
      <button
      onClick={lessValue}
      >Subtract</button>
    </>
  )
}

export default App
