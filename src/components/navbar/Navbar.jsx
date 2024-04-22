// import React from "react";
// import logo from "../assets/logo.png";
// import cart_icon from "../assets/cart_icon.png";

// const Navbar = () => {
//   return (
//     <div className="p-16 flex justify-around shadow-lg shadow-black">
//       <div>
//         <img src={logo} alt="logo" />
//         <p>SHO00PPER</p>
//       </div>
//       <div>
//         <ul>
//           <li>Shop</li>
//           <li>Men</li>
//           <li>Women</li>
//           <li>Kids</li>
//         </ul>
//       </div>
//       <div>
//         <button>Login</button>
//         <img src={cart_icon} alt="cart_icon" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

const Navbar = () => {
    const[menu, setMenu] = useState("shop")
  return (
    <div className="p-8 flex justify-around shadow-sm shadow-black">
      <div>
        <img src={logo} alt="logo" />
        <p className="text-xl font-bold">SHOPPER</p>
      </div>
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-4">
          <li onClick={()=>setMenu("shop")} className="text-gray-700 hover:text-gray-900">Shop {menu==="shop" ? <hr/>: <></>}</li>
          <li onClick={()=> setMenu("mens")} className="text-gray-700 hover:text-gray-900">Men {menu ==="mens" ? <hr/>:<></>}</li>
          <li onClick={()=> setMenu("womens")} className="text-gray-700 hover:text-gray-900">Women{menu==="womens" ? <hr/> : <></>}</li>
          <li onClick={()=> setMenu("kids")} className="text-gray-700 hover:text-gray-900">Kids{menu==="kids" ? <hr/> : <></>}</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        <img src={cart_icon} alt="cart_icon" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Navbar;

