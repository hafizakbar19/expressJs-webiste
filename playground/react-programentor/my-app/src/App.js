import React, { createContext, useState } from 'react'
import USobject from './USobject'
import USarray from './USarray'
import UEffectHook from './UEffectHook'
import CompC from './CompC';
import ControlledComp from './ControlledComp';
import AlltypeForm from './AlltypeForm';


export const NameContext = createContext();

function App() {
  const [name, setName] = useState('Akbar');
  return (
    <div>
      {/* <USobject/> */}
      {/* <UEffectHook/> */}
      {/* <NameContext.Provider value={name}>
        <CompC/>
      </NameContext.Provider> */}
      {/* <ControlledComp/> */}
      <AlltypeForm />
    </div>
  )
}

export default App