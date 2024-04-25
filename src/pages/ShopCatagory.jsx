import React, { useContext } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';

const ShopCatagory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div>
      <img src={props.banner} alt='catagory banner'/>
    </div>
  )
}

export default ShopCatagory