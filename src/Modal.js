import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'
import ImageExtract from './ImageExtract'
import { BsUpload, BsSearch } from 'react-icons/bs'

const Modal = () => {
  const { showModal, closeModal } = useGlobalContext()
  const [image, setImage] = useState(
    'https://source.unsplash.com/random/300x300'
  )
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    setImage(e.target[0].value)
  }

  const handleKeyword = (e) => {
    e.preventDefault()
    const keywordArr = e.target[0].value.split(' ')
    let url = 'https://source.unsplash.com/random/300x300/?'
    keywordArr.map((keyword, index) => {
      if (index !== 0) {
        url += ',' + keyword
      } else {
        url += keyword
      }
    })
    setImage(url)
  }

  return (
    <div
      className={`${showModal ? 'modal-overlay show-modal' : 'modal-overlay'}`}
    >
      <div className='modal-container'>
        <div className='modal-header'>
          <h3>Extract colors</h3>
          <button className='close-modal-btn' onClick={closeModal}>
            <FaTimes size={25} />
          </button>
        </div>

        <div className='modal-body'>
          <form onSubmit={handleSubmit} className='inputForm'>
            <label htmlFor='urlInput'>Search by URL</label>
            <input
              id='urlInput'
              className='input-url'
              type='text'
              placeholder='Enter an image url'
            />
            <button type='submit' className='upload-btn'>
              <BsUpload size={25} />
            </button>
          </form>

          <form onSubmit={handleKeyword} className='inputForm'>
            <label htmlFor='keywordInput'>Search by keyword</label>
            <input
              id='keywordInput'
              className='input-url'
              type='text'
              placeholder='Enter keyword(s)'
            />
            <button type='submit' className='search-btn'>
              <BsSearch size={25} />
            </button>
          </form>

          <ImageExtract error={error} setError={setError} image={image} />
        </div>
      </div>
    </div>
  )
}

export default Modal
