import React, { useState } from 'react'
import { ColorExtractor } from 'react-color-extractor'
import ImageSingle from './ImageSingle'

const IMAGE_STYLES = { width: 500, marginTop: 20 }

const SWATCHES_STYLES = {
  marginTop: 20,
  display: 'flex',
  justifyContent: 'center',
}
export default function ImageExtract({ image, error, setError }) {
  const [colors, setColors] = useState([])

  const getColors = (colorSwatch) => {
    setColors(colorSwatch)
  }

  if (error) {
    return (
      <p className='error_msg'>
        An error occured. Please insert a new link.
      </p>
    )
  }
  else {
    return (
    <div>
      <ColorExtractor getColors={getColors} onError={() => setError(true)}>
        <img src={image} alt='image' style={IMAGE_STYLES} />
      </ColorExtractor>

      <div style={SWATCHES_STYLES}>
        {colors.map((color, index) => {
          return <ImageSingle key={index} color={color} />
        })}
      </div>
    </div>
  )
  }
  
}
