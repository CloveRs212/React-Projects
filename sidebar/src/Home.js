import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, globalContext } from './context' 

const Home = () => {
  const [openSidebar, openModal] = globalContext();
  c
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>Show Modal</button>
    </main>
  )
}

export default Home
