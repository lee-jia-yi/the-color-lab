import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'
import { FaRegLightbulb } from 'react-icons/fa'

const WelcomeToast = ({ children }) => {
  const [show, toggleShow] = useState(false)
  return (
    <>
      {!show && (
        <Button
          style={{ backgroundColor: 'black' }}
          variant='info'
          onClick={() => toggleShow(true)}
        >
          <FaRegLightbulb />
        </Button>
      )}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className='mr-auto'>
            <FaRegLightbulb />
            User Guide:
          </strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  )
}

export default WelcomeToast
