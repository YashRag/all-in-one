import React from 'react'

const Character = ({name,imgurl}) => {
  return (
    <div className='w-[200px] p-3 bg-gray-200 m-2'>
        
      <div >
        <img className='w-36 h-36' src={imgurl} alt={name}/>
      </div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Character
