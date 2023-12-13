import React, { useState } from 'react'

function ControlledComp() {
    const [name, setName] = useState('Akbar');

  return (
    <div>
        <form>
            <label htmlFor='userName'>Enter Name: </label>
            <br />
            <input type='text' name='userName' value={name} onChange={}/>
            <br />
            <input type='submit' value='Submit' />
        </form>
    </div>
  )
}

export default ControlledComp