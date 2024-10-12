 import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const ReactElement = {
//   type: 'a',
//   props:{
//       href : 'https://www.google.com',
//       target: '_blank'
//   }, 
//   children: 'CLick to visit google'

// }
const anotherUser = "Happy JI"
const ReactElement = React.createElement(
  'a',
  {href :"https://google.com", target: "_blank"},
  "Click me to visit google ",
  anotherUser
)

const Element = (
  <h2>Hello Guys i am a not a component.</h2>
)
createRoot(document.getElementById('root')).render(
   
    
    
   
   ReactElement
   
    
  
    
  
)
