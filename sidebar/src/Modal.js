import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { globalContext } from './context'

const Modal = () => {
  const { isModalOpen, closeModal } = globalContext(); 
  return (
    <div 
      className={`${ isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>Modal Content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal