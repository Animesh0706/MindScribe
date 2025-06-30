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
import ExportJournal from './components/ExportJournal.jsx'
import ToggleTheme from './components/ToggleTheme.jsx'
import Intro from './components/Intro.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Intro />} />
      <Route path='/journal' element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='new' element={<AddEntries />} />
        <Route path='about' element={<About />} />
        <Route path='toggle' element={<ToggleTheme />} />
        <Route path='export' element={<ExportJournal />} />
        <Route path='edit/:id' element={<EditEntry />} />
      </Route>
    </>
  )
);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
