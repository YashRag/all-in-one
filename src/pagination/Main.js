import React from 'react'
import CharacterContainer from './CharacterContainer'

const Main = () => {
  return (
    <div className='w-screen  bg-gray-100 items-center'>
      <div className='flex  justify-center '>Game of Thromes</div>
       <div className=''>
       <CharacterContainer/>
       </div>

    </div>
  )
}

export default Main
