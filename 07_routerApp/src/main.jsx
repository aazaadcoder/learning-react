import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from"./components/Contact/Contact.jsx"
import User from './components/User/User.jsx'
import Github , {githubInfoLoader} from './components/Github/Github.jsx'

//method 1 to create rouutes 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path:"contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//method 2 to create routes 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element= {<Layout/>}>
      {/* these routes can also be self closing better i guess */}
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}>
      {/* <Route path='harshit'></Route>  */}
      </Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userId' element={<User/>}></Route>
      <Route
    loader={githubInfoLoader}
      path='github'
       element={<Github/>}
       ></Route>
    </Route>
  )
)
//you can study more in doccumentstaion things like loader etc etc 

//loader bahut pehle hi api fecth kar leta hai useffect se bhi pehle and cahche mai store karta hai , you can pass a cb fxn in loader the api fecth fxn or you can pass a method refrence 
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
     {/* router provider is a wrapper usme hume saare routes lapet diye hai  */}
  </StrictMode>,
)
