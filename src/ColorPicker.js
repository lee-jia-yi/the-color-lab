import React from 'react'
import { useGlobalContext } from './context'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import SingleColor from './SingleColor'

const ColorPicker = () => {
  const { color, setColor, list } = useGlobalContext()

  return (
    <main>
      <div className='container'>
        <div className='color-picker responsive'>
          <HexColorPicker color={color} onChange={setColor} />
          <div className='input-field'>
            <HexColorInput color={color} onChange={setColor} />
          </div>
        </div>
      </div>

      {/* Generate Hues and Tines */}
      <section>
        <div className='colors'>
          {list.map((color, index) => {
            return (
              <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default ColorPicker
