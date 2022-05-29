import React, { useEffect, useState, useContext } from 'react'
import Values from 'values.js'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [alert, setAlert] = useState(false)
  const [color, setColor] = useState('#D56083')
  const [list, setList] = useState(new Values('#D56083').all(5))
  const [showModal, setShowModal] = useState(false)
  const [image, setImage] = useState(
    'https://source.unsplash.com/random/300'
  )

  const randomColor = () => {
    let randomCode = Math.floor(Math.random() * 16777215).toString(16)
    while (randomCode.length !== 6) {
      randomCode = Math.floor(Math.random() * 16777215).toString(16)
    }
    const newCode = '#' + randomCode
    setColor(newCode)
  }

  useEffect(() => {
    document.body.style.background = color
    let colors = new Values(color).all(5)
    setList(colors)
  }, [color])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])


  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <AppContext.Provider
      value={{
        alert,
        setAlert,
        color,
        setColor,
        randomColor,
        list,
        setList,
        showModal,
        openModal,
        closeModal,
        image,
        setImage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
