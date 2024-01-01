
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Llayout/Main'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import UserDetails from './Pages/UserDetails/UserDetails'

function App() {
 
   const router = createBrowserRouter ([

    {
      path: '/',
      element:<Main></Main>,
      children:[
        {
          path: '/',
          element:<Home></Home>,
          loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
        },
        {
          path: '/about',
          element:<About></About>
        },
        {
          path: '/contact',
          element:<Contact/>
        },
        {
          path: '/user-details/:id',
          element:<UserDetails></UserDetails>,
          loader:({ params })=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        }
      ]
     }
   ])
   

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
      
    </>
  )
}

export default App
