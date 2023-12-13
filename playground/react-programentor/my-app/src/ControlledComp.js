import React, { useState } from 'react'

function ControlledComp() {
    const [name, setName] = useState('');

    const changeHandler = (e) => {
      setName(
        e.target.value
      )
      console.log(e.target)
    }

  return (
    <div>
        <h1>{name}</h1>
        <form>
            <label htmlFor='userName'>Enter Name: </label>
            <br />
            <input type='text' name='userName' value={name} onChange={changeHandler}/>
            <br />
            <input type='submit' value='Submit' />
        </form>
    </div>
  )
}

export default ControlledComp