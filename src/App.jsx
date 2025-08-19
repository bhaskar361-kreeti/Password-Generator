import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  return (
    <>
      <div className='h-screen w-full flex-col bg-black text-white flex justify-center items-center'>
        <h1 className='mb-10 text-3xl font-bold '>Password Generator</h1>
        <div className='flex justify-center items-center flex-col password_section w-3/5 h-[350px]  bg-blue-900 rounded-2xl'>
          <div className=' input__button w-4/5 h-4/5 flex justify-center gap-x-4 items-center'>
            <input className='w-3/5 px-6 py-6 rounded-xl bg-gray-300 text-black' type="text" />
            <button className='bg-orange-400 font-bold px-6 py-6 rounded-xl text-black'>Click here</button>
          </div>
          <div className='flex text-xl font-bold justify-center items-center gap-x-10 w-4/5 h-1/3 '>
            <div>
              <input type="range" min={2} max={20} />
              <label className='text-orange-400' htmlFor="#">Length({length})</label>
            </div>

            <div>
              <input type="checkbox" />
              <label className='text-orange-400' checked={numberAllowed} htmlFor="#">Numbers </label>
            </div>

            <div>
              <input type="checkbox" />
              <label className='text-orange-400' checked={charAllowed} htmlFor="#">Characters</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
