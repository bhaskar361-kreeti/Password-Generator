import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordReference = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  }, [password])


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNabcdefghijklmn"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#$%^&*!"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])


  return (
    <>
      <div className='h-screen w-full flex-col bg-black text-white flex justify-center items-center'>
        <h1 className='mb-10 text-3xl font-bold '>Password Generator</h1>
        <div className='flex justify-center items-center flex-col password_section w-3/5 h-[350px]  bg-blue-900 rounded-2xl'>
          <div className=' input__button w-4/5 h-4/5 flex justify-center gap-x-4 items-center'>
            <input className='w-3/5 px-6 py-6 rounded-xl text-2xl bg-gray-300 text-black' type="text" value={password} placeholder='Password' />
            <button
            onClick={()=>copyPasswordToClipboard}
            className='bg-orange-300 font-bold px-6 py-6 rounded-xl text-black'>Click here</button>
          </div>

          <div className='flex text-xl font-bold justify-center items-center gap-x-10 w-4/5 h-1/3 '>
            <div className='flex justify-center items-center gap-x-3'>
              <input
                onChange={(e) => { setLength(e.target.value) }}
                type="range" min={8} max={20} />
              <label className='text-orange-400' htmlFor="#">Length({length})</label>
            </div>

            <div className='flex justify-center items-center gap-x-3'>
              <input
                onChange={() => setNumberAllowed((prev) => !prev)}
                type="checkbox" />
              <label className='text-orange-400' checked={numberAllowed} htmlFor="#">Numbers </label>
            </div>

            <div className='flex justify-center items-center gap-x-3'>
              <input
                onChange={() => setCharAllowed((prev) => !prev)}
                type="checkbox" />
              <label className='text-orange-400' checked={charAllowed} htmlFor="#">Characters</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
