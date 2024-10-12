import { useState } from 'react'
import './App.css'
// import Button from './componets/Button'
function App() {
 const [bgColor, setBgColor] = useState('skyblue')
  return (
    <>
      <div className='w-full h-screen '
      style={{backgroundColor : bgColor}}>
        <h1 className='  text-4xl text-white flex justify-center top-9'>BG Color Changer APP</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2'>
      <div className='flex flex-wrap justify-center bg-white rounded-3xl p-2 text-blue-50'>
      <button className='bg-green-500 p-4 rounded-3xl m-2' onClick={()=>{setBgColor('green')}}>Green</button>
      <button className='bg-blue-500 p-4 rounded-3xl m-2' onClick={()=>{setBgColor('blue ')}}>blue</button>
      <button className='bg-red-500 p-4 rounded-3xl m-2 w-' onClick={()=>{setBgColor('red')}}>Red</button>
      <button className='bg-pink-500 p-4 rounded-3xl m-2' onClick={()=>{setBgColor('pink')}}>pink</button>
      <button className='bg-gray-500 p-4 rounded-3xl m-2' onClick={()=>{setBgColor('gray')}}>gray</button>
      <button className='bg-purple-500 p-4 rounded-3xl m-2' onClick={()=>{setBgColor('purple')}}>purple</button>
      <button className='bg-sky-400 p-4 rounded-3xl m-2' onClick={()=>{setBgColor('skyblue')}}>Sky blue</button>
      <button className='bg-black p-4 rounded-3xl m-2 ' onClick={()=>{setBgColor('black')}}>black</button>
      </div>
      </div>
      </div> 
    </>
  )
}

export default App
