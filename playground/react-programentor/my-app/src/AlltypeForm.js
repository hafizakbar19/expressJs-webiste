import React, { useState } from 'react'

function AlltypeForm() {

    const [textarea, setTextarea] = useState('');
    const submitHandler = (e) => {
        console.log(e.target[0].value);
        e.preventDefault();
        console.log(e.target[1].value);
        console.log(e.target[2].checked)
    };

    const [selectMenu, setSelectMenu] = useState('Pakistan');

    const [check, setCheck] = useState(false);

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label style={{verticalAlign: 'top'}} htmlFor="">Comments</label>
            <textarea value={textarea} name="" id="" cols="30" rows="5" onChange={(e) => setTextarea(e.target.value)}></textarea>
            <br />
            <label htmlFor="">Select Country</label>
            <select name="" id="" value={selectMenu} onChange={(e) => (setSelectMenu(e.target.value))}>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="China">China</option>
                <option value="Russia">Russia</option>
            </select>
            <br />
            <label htmlFor="">Agree the terms and conditions</label>
            <input type="checkbox" name="" id="" checked={check} onChange={(e) =>setCheck(e.target.checked)} />
            <br />
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}
// console.log(SubmitEvent);
export default AlltypeForm