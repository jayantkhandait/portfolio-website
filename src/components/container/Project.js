import React from 'react'

const Project = ({item}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
        <div className='mb-8'>
            <img className='rounded-2xl' src={item.image} alt=''/>
        </div>
        <p className='capitalize text-yellow-500 text-lg mb-3'>{item.category}</p>
        <h3 className='text-2xl text-black font-semibold capitalize mb-3'>{item.name}</h3>
    </div>
  )
}

export default Project