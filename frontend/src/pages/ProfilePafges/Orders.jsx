import React from 'react'

const Orders = () => {
  return (
    <div className='space-x-5 '>
      <button className='w-1/4 p-3 hover border border-blue-500 inset-shadow-2xs bg-white rounded dark:bg-gray-500 hover:border-none transition transform duration:2s hover:scale-110'>My Orders</button>
      <button  className='w-1/4 p-3 hover border border-blue-500 inset-shadow-2xs bg-white rounded dark:bg-gray-500  hover:border-none transition transform duration:2s hover:scale-110'>Recently viewed items</button>
      <button  className='w-1/4 p-3 hover border border-blue-500 inset-shadow-2xs bg-white dark:bg-gray-500 rounded hover:border-none transition transform duration:2s hover:scale-110'>Order Support/Help</button>
    </div>
  )
}

export default Orders