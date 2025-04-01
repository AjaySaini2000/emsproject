import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { IoIosSearch } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";

const SearchStudycenter = () => {
    return (
        <>
            <Navbar />
            <div className='xl:px-12 px-3'>
                <div className='container-xl mx-auto min-h-[80vh] my-3 gap-2 bg-white px-4 py-8'>
                    <div className='md:flex justify-between mb-4'>
                        <div className='text-xl font-semibold mb-2'>
                            <h1>Study Center Search
                            </h1>
                        </div>

                    </div>
                    <form action="" method="post">
                    <div className='grid grid-cols-3 gap-4 mb-4'>
                        <div className='sm:col-span-1 col-span-3'>
                        <select name="" id="" className='w-full py-3 px-1 bg-gray-400 focus:outline-none text-white shadow-lg border border-gray-300 text-lg'>
                            <option value="">Select Technology</option>
                            <option value=".Net Core">.Net Core</option>
                            <option value="3D Coat">3D Coat</option>
                            <option value="3D Maya">3D Maya</option>
                            <option value="Active Directory">Active Directory</option>

                        </select>
                        </div>
         
                        <div className="relative sm:col-span-2 col-span-3 sm:my-0 my-2 ">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 text-2xl "><IoIosSearch className=''/></span>
                </div>
                <input type="text" name="price" id="price" className="block shadow-md rounded-md py-3 pl-12 pr-20 text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:shadow text-lg  w-full" placeholder="Search By Document" />
              </div>
                    </div>
                    <div className='flex gap-3 flex-row-reverse'>
                    
                        <button type="button" className='bg-orange-400 text-white font-semibold px-4 py-2 w-auto hover:bg-black transition-all duration-700 ease-in-out'>Search</button>
                        <button type="button" className='bg-green-500 text-white font-semibold px-4 py-2 w-auto flex items-center gap-2'><TfiReload  className=''/>
                        Reset</button>
                    </div>
                    </form>
                    <div>No Record found</div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SearchStudycenter