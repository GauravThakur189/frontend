import React from 'react'

const item = (props) => {
  return (
    <div className='w-[350px]'>
        <img src={props.image} alt='items'/>
        <p  className='mx-[6px] my-0'>{props.name}</p>
        <div className='flex gap-[20px]'>
            <div className='text-xl
            font-semibold text-gray-700 '>
               $ {props.new_prices}
            </div>
            <div className='text-xl text-gray-600 font-normal line-through'>
               $ {props.old_prices}
            </div>
        </div>
    </div>
  )
}

export default item