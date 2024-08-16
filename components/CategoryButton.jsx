import React from 'react'

const CategoryButton = ({category}) => {
  return (
    <button className='py-2 px-4 bg-gray-700 rounded-2xl text-white text-nowrap overflow-hidden'>
        {category}
    </button>
  )
}

export default CategoryButton