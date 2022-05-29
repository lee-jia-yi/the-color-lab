import React from 'react'
import { useGlobalContext } from './context'
import { BiShuffle } from 'react-icons/bi'
import { AiOutlineUpload } from 'react-icons/ai'

const Navbar = () => {
  const { openModal, randomColor } = useGlobalContext()
  return (
    <nav>
      
      <h2>The Color Lab!</h2>

      <div className='btn-container'>
        <button className='side-btn' onClick={randomColor}>
          <span className='label'>Random!</span>
          <BiShuffle size={30} />
        </button>
        <button className='side-btn' onClick={openModal}>
          <AiOutlineUpload size={30} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
