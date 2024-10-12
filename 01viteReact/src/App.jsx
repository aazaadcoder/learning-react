 
import Hello from "./Hello"
function App() {
  const userName = "Happy Negi"
  return (
    <>
      <h1>Hello this is my first project with vite and react</h1>
      <h2>I am {userName}</h2> 
      {/* inside {} we only write only evalutaion expression that is the final outcome of the js not the wholw evaluation steps of the js wo bahar hoga due to the defination of create react element function of react*/}
      <Hello/>
    </>
  )
}

export default App
