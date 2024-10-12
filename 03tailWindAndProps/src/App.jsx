 
import './App.css'
import Card from './components/Card'
function App() {
 
  return (
    // can pass varibles in js using props
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-2xl'>Tailwind test</h1>
      <Card userName= "Harshit Negi" imageUrl= "https://images.pexels.com/photos/16249345/pexels-photo-16249345/free-photo-of-a-woman-in-a-white-sweater-and-black-jacket.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Card   imageUrl= "https://images.pexels.com/photos/28850140/pexels-photo-28850140/free-photo-of-graduation-portrait-with-ivy-covered-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </>
  )
}

export default App
