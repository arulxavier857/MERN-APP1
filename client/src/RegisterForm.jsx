import React, { useState } from "react";

function RegisterForm() {

  const [name,setName] = useState()
  const [email,setEmail] = useState()

  return (
    <div className="w-full max-w-md mx-auto mt-20">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border">
        <h3 className="font-bold text-blue">Registration Form</h3>
        <div className="mb-4">
          <label className="block text-gray-700 text-start text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow border rounded w-full py-2 px-3 text-gray-700" id="name" type="text" placeholder="Name"></input>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-start text-sm font-bold mb-2" htmlFor="email">
          Email
          </label>
          <input className="shadow border rounded w-full py-2 px-3 text-gray-700" id="email" type="email" placeholder="Email ID"></input>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-start text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input className="shadow  border rounded w-full py-2 px-3 text-gray-700" id="phone" type="text" placeholder="Phone Number"></input>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-start text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="location" type="text" placeholder="Location"></input>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign Up
          </button>
        </div>
        
      </form>
  </div>
  );
}

export default RegisterForm