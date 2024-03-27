import { useState } from "react"

function App() {
  
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="flex justify-center width-full h-screen" 
      style={{backgroundColor: color}}
      >
        <div className="flex justify-center p-4 m-4 bg-slate-500 text-white h-[84px] rounded-[25px] gap-4">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          onClick={()=>setColor("green")}
          style={{backgroundColor: "green"}}
          >Green</button>

<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          onClick={()=>setColor("red")}
          style={{backgroundColor: "red"}}
          >Red</button>

<button className="outline-none px-4 py-1 rounded-full shadow-lg text-black" 
          onClick={()=>setColor("yellow")}
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          onClick={()=>setColor("blue")}
          style={{backgroundColor: "blue"}}
          >Blue</button>

<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          onClick={()=>setColor("orange")}
          style={{backgroundColor: "orange"}}
          >Orange</button>

<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          onClick={()=>setColor("purple")}
          style={{backgroundColor: "purple"}}
          >Puprple</button>
        </div>
      </div>
    </>
  )
}

export default App
