import React, { useEffect, useState } from 'react'

function UEffectHook() {

    const [count, setCount] = useState(0);
    let [name, setName] = useState("Akbar");

    useEffect(()=>{
        console.log("useEffect function called " + count);
    },[count])

    useEffect(()=>{
        console.log("Hello " + name);
    },[name])

  return (
    <div>
        <h1>{count}</h1>
        <h1>{name}</h1>
        <button onClick={() => setCount(count +1)}>Update state</button>
        <button onClick={() => setName(name = "Ali")}>Update Name</button>
    </div>
  )
}

export default UEffectHook