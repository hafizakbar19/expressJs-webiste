import React from 'react';
import { useState } from 'react';

function MultipleCB() {

    const [fruitsArray, setFruitsArray] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked);

        if(checked){
            setFruitsArray(
                [...fruitsArray, value]
            )
        }else{
            setFruitsArray(fruitsArray.filter((e) => (e !== value)));
        }

    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(fruitsArray);
    };

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="">Apple</label>
            <input type="checkbox" name="" id="" value={'Apple'} onChange={handleChange}/>
            <br />
            <label htmlFor="">Banana</label>
            <input type="checkbox" name="" id="" value={'Banana'} onChange={handleChange}/>
            <br />
            <label htmlFor="">Mango</label>
            <input type="checkbox" name="" id="" value={'Mango'} onChange={handleChange}/>
            <br />
            <label htmlFor="">Orange</label>
            <input type="checkbox" name="" id="" value={'Orange'} onChange={handleChange}/>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default MultipleCB