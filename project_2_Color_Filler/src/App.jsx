import { useState } from 'react'
import React from 'react'
import './App.css'
function App() {
  const [color,setColor]=useState("orange")
  const [fillerColor,setFillerColor]=useState("White")

  
  return (
    <>
      
      <div className='w-full h-screen flex' style={{backgroundColor : color}}>
      <h1 className='fixed left-1/2 top-1/2 font-bold text-5xl' id='center' style={{color: fillerColor}}>Color Filler App</h1>
        <div className='justify-center bottom-12 flex flex-wrap fixed inset-x-0 px-2'>
          <div className='bg-white fixed flex flex-wrap rounded-3xl p-2 bottom-12 gap-5'>
            <button onClick={()=> {setColor("red");setFillerColor("white")}} className='border-2 border-black px-3 rounded-xl text-white' style={{backgroundColor: "red"}}>Red</button>
            <button onClick={()=> {setColor("blue");setFillerColor("white")}} className='border-2 border-black px-3 rounded-xl text-white' style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={()=> {setColor("green");setFillerColor("white")}} className='border-2 border-black px-3 rounded-xl text-white' style={{backgroundColor: "green"}}>Green</button>
            <button onClick={()=> {setColor("yellow");setFillerColor("black")}} className='border-2 border-black px-3 rounded-xl text-black' style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={()=> {setColor("purple");setFillerColor("white")}} className='border-2 border-black px-3 rounded-xl text-white' style={{backgroundColor: "purple"}}>Purple</button>
            <button onClick={()=> {setColor("violet");setFillerColor("black")}} className='border-2 border-black px-3 rounded-xl text-black' style={{backgroundColor: "violet"}}>Violet</button>
            <button onClick={()=> {setColor("brown");setFillerColor("white")}} className='border-2 border-black px-3 rounded-xl text-white' style={{backgroundColor: "brown"}}>Brown</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
