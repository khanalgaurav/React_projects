import { useState } from 'react'
import './App.css'

function App() {
  
// let counter = 0;// this is done by the hook hehe
const [counter,setCounter]=useState(0)


const adder = () =>{
  if(counter<20)
  setCounter(counter+1)
  else
  alert("counter is at its maximum level")
}
const subtractor = () => {
  if(counter>0)
  setCounter(counter-1)
  else
  alert("Count is already at its minimum level")
}
const resetor = () => {
  setCounter(0)
}

  return (
    <>
      <h1>Counter App</h1>
      <p>Live Count : {counter}</p>
      <button onClick={adder}>Add</button>
      <br />
      <br />
      <button onClick={subtractor}>Subtract</button>
      <br />
      <br />
      <button onClick={resetor}><i class="fa-solid fa-rotate-right"></i> Reset</button>
    </>
  )
}

export default App
