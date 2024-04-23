import React from 'react'

const item = (props) => {
  return (
    <div>
        <img src={props.image} alt='items'/>
        <p>{props.name}</p>
        <div>
            <div>
                {props.new_price}
            </div>
            <div>
                {props.old_price}
            </div>
        </div>
    </div>
  )
}

export default item