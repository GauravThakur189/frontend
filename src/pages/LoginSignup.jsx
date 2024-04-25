// import React from 'react'

// const LoginSignup = () => {
//   return (
//     <div>
//     <div>
//       <h1>Sign Up</h1>
//       <div>
//         <input type='text' placeholder='Username' />
//         <input type='email' placeholder='Email Address' />
//         <input type='password' placeholder='Password' />
//       </div>
//       <button>Continue</button>
//       <p>Already have an account <span>Login here</span> </p>
//       <div>
//         <input type='checkbox' id='show-pass' name=''/>
//         <p>By continuing, i agree to the terms of use & privacy  policy.</p>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default LoginSignup


// import React from 'react';

// const LoginSignup = () => {
//   return (
//     <div className="max-w-md mx-auto mt-20 px-4">
//       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
//         <div className="mb-4">
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Username"
//           />
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline"
//             type="email"
//             placeholder="Email Address"
//           />
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline"
//             type="password"
//             placeholder="Password"
//           />
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           Continue
//         </button>
//         <p className="mt-4 text-sm">
//           Already have an account? <span className="text-blue-500 cursor-pointer">Login here</span>
//         </p>
//         <div className="mt-4 flex items-center">
//           <input
//             className="mr-2 leading-tight"
//             type="checkbox"
//             id="show-pass"
//             name=""
//           />
//           <p className="text-sm">
//             By continuing, I agree to the terms of use & privacy policy.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;





import React from 'react';

const LoginSignup = () => {
  return (
    <div className="max-w-md mx-auto mt-20 px-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Continue
        </button>
        <p className="mt-4 text-sm">
          Already have an account?{' '}
          <span className="text-blue-500 cursor-pointer">Login here</span>
        </p>
        <div className="mt-4 flex items-center">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            id="show-pass"
            name=""
          />
          <p className=" text-[10px]">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
