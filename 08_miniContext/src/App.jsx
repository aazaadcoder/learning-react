 import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {


  return (
    <UserContextProvider>
      <h1>Learning Chai</h1>
      {/* Now ander ke sarre components ke pass states ka acces hoga they can use it as props direcly without prop dirlling  */}

      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
