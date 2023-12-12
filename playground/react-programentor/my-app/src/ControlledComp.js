import React, { Component } from 'react'

export default class ControlledComp extends Component {

    constructor(props) {
      super(props)
      this.state = {
         user: 'Akbar'
      }
    }

   const changeHandler = (e) => {
        this.setState(
            {user: e.target.value}
        )
        }

  render() {
    return (
      <div>
      <h1>{this.state.user}</h1>
        <form>
            <label htmlFor='userName'>Enter User Name: </label>
            <br/>
            <input name='userName' type='text' value={this.state.user} onChange={changeHandler}/>
            <br/>
            <input type='submit' value='submit'/>
        </form>
      </div>
    )
  };
}
