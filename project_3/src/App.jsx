import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'


function App() {

  const [len,setLen] = useState(8);
  const [number,setNumber] = useState(false);
  const [character,setCharacter] = useState(false);
  const [password,setPassword] = useState("");
  const passwordRef= useRef(null)

  const passwordGenerator = useCallback (()=>{
    let text="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      text += "0123456789"
    }
    if(character){
      text += "!@#$%^&*~"
    }
    let newPassword = ""
    for(let i=0;i<len;i++){
      let rNumber=Math.floor(Math.random()*text.length)
      newPassword += text.charAt(rNumber)
    }
    setPassword(newPassword)
  }, [len,number,character,setPassword])

  const copyToClipboard=()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  useEffect( ()=>{
    passwordGenerator();
  },[len,character,number,passwordGenerator])

  return (
    <>
      <div className='mt-10 mx-96 border-2 p-3 border-red-500 bg-slate-600 text-orange-500'>
        <h1 className='flex w-full justify-center text-white text-2xl'>Password Generator App</h1>
        <div className='w-full mt-5 flex justify-center gap-2 '>
          <input type="text" value={password} className=' w-80 rounded-xl pl-3 py-1 bg-grey-500 text-black' readOnly ref={passwordRef}/>
          <button type="button" className=' bg-blue-600 text-white rounded-xl px-6' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='flex justify-center mt-2 gap-5 align-middle'>
          <div>
          <input type="range" min={8} max={30} value={len} onChange={(e)=>setLen(e.target.value)}/>
          <label htmlFor=""> length:{len}</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={number} onChange={()=>{setNumber(prev=>!prev)}}/>
            <label >Numbers</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={character} onChange={()=>{setCharacter(prev=>!prev)}} />
            <label >Characters</label>
          </div>
        </div>
      </div>  
    </>
  )
}

export default App
