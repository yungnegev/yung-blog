import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Post from './pages/Post'
import AddPost from './pages/AddPost'
import Login from './pages/Login'
import Register from './pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post/:id',
        element: <Post />
      },
      {
        path: '/add-post',
        element: <AddPost />
      },
      {
        path: '/add-post/:id',
        element: <AddPost />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])



const App = () => {
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
