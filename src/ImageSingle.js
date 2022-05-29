import React, { useState, useEffect } from 'react'

const ImageSingle = ({ color }) => {
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article
      style={{
        backgroundColor: color,
        width: 200,
        height: 200,
      }}
      className='color'
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(color)
      }}
    >
      <p className='color-value'>{color}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default ImageSingle
