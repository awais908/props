import React from 'react'

export default function Props(Props) {
  return (
    <div>
    <div className='title'>
      {Props.title}
    </div>
    <div className='paragraph'>
      {Props.paragraph}
    </div>
    <div className='button'>
      {Props.button}
    </div>
    </div>
  )
}
