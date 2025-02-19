import React from "react";
import axios from 'axios'

function Dashboard(){
    

    return(
      <div className="flex flex-col py-6 bg-gray-100">
          <h1 className="text-center text-3xl">Stock Details</h1>
          <table className="w-[80%] mx-auto border border-gray-300 mt-6">
              <thead>
                  <tr className="border border-gray-100 bg-green-200">
                    <th className="px-6 py-3">Sl.No</th>
                    <th className="px-6 py-3">Product Name</th>
                    <th className="px-6 py-3">Quantity</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
              </thead>
              <tbody>
                  
              </tbody>
          </table>
      </div>
    )
}

export default Dashboard