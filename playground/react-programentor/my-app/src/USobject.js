import React, { useState } from 'react'

function USobject() {

    const obj = {
        name: 'Akbar',
        age: 35,
        city: "Karachi",
        isYoung: true
    };

    const [person, setPerson] = useState(obj);

    let changeHandler = () => {
        setPerson(
           prev => {
            return{
                ...prev, name: 'Ali'
            }
           }
        )
    }

  return (
    <div>
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        <h1>{person.city}</h1>
        <h1>{person.isYoung.toString()}</h1>
        <button onClick={changeHandler}>Change</button>
    </div>
  )
}

export default USobject