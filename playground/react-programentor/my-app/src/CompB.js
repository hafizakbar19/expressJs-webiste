import React, { useContext } from 'react'
import CompC from './CompC'
import { NameContext } from './App'
import CompA from './CompA'

function CompB() {


  return (
    <div>
        <CompA/>
    </div>
  )
}

export default CompB