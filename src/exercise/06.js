// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useRef } from 'react';
// 🐨 add a submit event handler here (`handleSubmit`).
// const [error, setError] = React.useState(null) // (Improved)
// 💰 Make sure to accept the `event` as an argument and call
// `event.preventDefault()` to prevent the default behavior of form submit
// events (which refreshes the page).
// 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//
// 🐨 get the value from the username input (using whichever method
// you prefer from the options mentioned in the instructions)
// 💰 For example: event.target.elements[0].value
// 🐨 Call `onSubmitUsername` with the value of the input 
// 🐨 add the onSubmit handler to the <form> below

// 🐨 make sure to associate the label to the input.
// to do so, set the value of 'htmlFor' prop of the label to the id of input

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  const handleSubmit = (event) => {
    // Prevent refreshing the page on submittance.
    event.preventDefault();
    

    // const value = inputEl.current.value // With useRef to indicate a mutable element
    // const value = event.target.elements.usernameInput.value;
    // const value = event.target[0].value;

    // onSubmitUsername(value); //With useRef
    onSubmitUsername(username)
  }

  const handleChange = (event) => {
    const {value} = event.target;
    setUsername(value.toLowerCase());
    // const isLowerCase = value === value.toLowerCase();
    // setError(isLowerCase ? null : 'Username must be lower case');
    // console.log(error); //shows the previous state (why?)
  }
  
  
  // We set the reference and initialvalue for it (null)
  // const inputEl = useRef(null) // With useRef
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
        // ref={inputEl}
        type="text"
        id="usernameInput"
        onChange={handleChange}
        // Controlled input - We force with React to set the value with the state (convert to lowercase)
        value = {username}
        />
      </div>

      {/* <div style={{color: 'red'}}>{error}</div> */}
      {/* We can simply put disabled={error} if we don't want convert into boolean'*/}
      <button
      // disabled={Boolean(error)}
      type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
