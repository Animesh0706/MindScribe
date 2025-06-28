import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout.jsx'
import AddEntries from './components/Entries.jsx'
import Home from './components/home.jsx'
import EditEntry from './components/EditEntry.jsx'
import About from './components/About.jsx'




// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path='/' element={<Home />} />
//       <Route path='/new' element={<AddEntries />} />
//       <Route path='/edit/:id' element={<EditEntry />} />
//     </Route>
//   )
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/new' element={<AddEntries />} />
      <Route path='/about' element={<About />} />
      <Route path='edit/:editid' element={<EditEntry />} />
    </Route>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
