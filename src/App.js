import React from 'react'
import './index.css'
import ColorPicker from './ColorPicker'
import WelcomeToast from './Toast'
import Navbar from './Navbar'
import Modal from './Modal'

export default function App() {
  return (
    <>
      <Navbar />
      <Modal />
      <WelcomeToast>
        Welcome to The Color Lab! You can generate the hues and the tints of
        your selected color.
        <br />
        Try extracting colors from an image or a random image by clicking the
        top right icon!
        <br />
        Have fun!
        <span role='img'>🎉</span>
      </WelcomeToast>
      <ColorPicker />
    </>
  )
}
