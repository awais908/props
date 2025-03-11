import React from 'react'
import Props from './Props'
export default function Main() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-4'>
          <Props title="Hello World" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at magni ratione maxime eum, 
            eligendi distinctio neque. Maiores, minus impedit quasi fugit rem consectetur molestias veniam,
             voluptas ipsum ea magnam!" button="Click Here"/>
        </div>
        <div className='col-4'>
          <Props title="Hello World" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at magni ratione maxime eum, 
            eligendi distinctio neque. Maiores, minus impedit quasi fugit rem consectetur molestias veniam,
             voluptas ipsum ea magnam!" button="Click Here" />
        </div>
        <div className='col-4'>
          <Props title="Hello World" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at magni ratione maxime eum, 
            eligendi distinctio neque. Maiores, minus impedit quasi fugit rem consectetur molestias veniam,
             voluptas ipsum ea magnam!" button="Click Here"/>
        </div>
       
      </div>
    </div>
  )
}
