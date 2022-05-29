import React, { useState, useEffect } from 'react'

import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, type }) => {
  const [alert, setAlert] = useState(false)
  const hex = rgbToHex(...rgb)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article
      className={`color ${index > 20 && 'color-light'} ${
        type === 'base' && 'base'
      }`}
      style={{ backgroundColor: hex }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hex)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
