   
import './App.css'
import { useState } from 'react'
function App() {
  const [counterValue, setCounterValue] = useState(5)

  // let counterValue =5
  const incCounter = ()=>{
    // counterValue++
    // inc but no ui updation , so here react hooks hepl in ui updation 

    if(counterValue<20){
      setCounterValue(counterValue+1)
    }
    console.log("counterValue: ", counterValue)

  }
  const decCounter = ()=>{
    // counterValue--

    if(counterValue>=1){
      setCounterValue(counterValue-1)
    }
    console.log("counterValue: ", counterValue)


  }
  return (
    <>
      <h1>App Counter {counterValue}</h1>
      <h2>Counter Value: {counterValue}</h2>

      <button onClick={incCounter}>Increase Counter: {counterValue}</button>
      <br/>
      <br/>
      <button onClick={decCounter}>Decrease Counter: {counterValue}</button>
    </>
  )
}

export default App
