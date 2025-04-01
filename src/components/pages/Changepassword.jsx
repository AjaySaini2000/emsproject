import React, { useState } from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer';

const Changepassword = () => {
    const [isSubmitting, setIsSubmitting] = useState(false); // Track button state

  return (
    <>
    <Navbar/>
    <div className='xl:px-12 px-3'>
                <div className='container-xl min-h-[90vh] mx-auto my-3 gap-2 bg-white px-4 py-8 '>
                    <div>
                        <div className='md:flex justify-between'>
                            <div className='text-2xl font-semibold mb-2'>
                                <h1>Change Password
                                </h1>
                            </div>

                        </div>
                        <div className='flex justify-center'>
                            
                        <form className='w-[400px] p-5 shadow rounded-md' >
        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-[rgb(38,44,56)] text-xs font-medium mb-2"
          >
            Password*
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow"
            
            required
          />
        </div>

        {/* New Password Field */}
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-[rgb(38,44,56)] text-xs font-medium mb-2"
          >
            New Password*
          </label>
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow"
            
            required
          />
        </div>

        {/* Confirm New Password Field */}
        <div className="mb-6">
          <label
            htmlFor="confirmNewPassword"
            className="block text-[rgb(38,44,56)] text-xs font-medium mb-2"
          >
            Confirm New Password*
          </label>
          <input
            id="confirmNewPassword"
            name="confirmNewPassword"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow"
            
            required
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className={`h-10 rounded-md text-white w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-dark-pink hover:bg-[#be1044] hover:text-lg'}`}
          >
            {isSubmitting ? (
                        <ClipLoader color="#ffffff" size={24} /> // Show spinner while submitting
                    ) : (
                        'SAVE'
                    )}
          </button>
        </div>
      </form>
                        </div>


                    </div>

                </div>
            </div>
            <Footer/>
    </>
  )
}

export default Changepassword