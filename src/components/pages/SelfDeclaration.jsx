import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
const SelfDeclaration = () => {
    return (
        <>
        <Navbar/>
            <div className='xl:px-12 px-3'>
                <div className='container-xl mx-auto my-3 gap-2 bg-white px-4 py-8'>

                    <div className='md:flex justify-between'>
                        <div className='text-xl font-semibold mb-2'>
                            <h1>Self Declaration
                            </h1>
                        </div>

                    </div>
                    <div className='profile mt-6'>
                        <form className=''>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                                {/* Name and Profile Picture */}
                                <div className='grid grid-cols-3 gap-2'>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 ">Name</label>
                                    </div>
                                    <div className='col-span-2'>
                                        <input
                                            type="text"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md flex-grow w-full"
                                            placeholder="Mohd. Amir Khan"
                                        />
                                    </div>
                                </div>


                                {/* Gender, Employee Code,DOB, and Date of Joining */}

                                <div className='grid grid-cols-3 gap-2'>
                                    <div>
                                        <label className="block text-sm  font-medium mb-1">Gender</label>
                                    </div>

                                    <div className="col-span-2 space-x-4 w-full">
                                        <label>
                                            <input type="radio" name="gender" className="mr-1" /> Male
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" className="mr-1 " /> Female
                                        </label>
                                    </div>

                                    
                                </div>

                                <div className='grid grid-cols-3 gap-2'>
                                    <label className="block text-sm font-medium mb-1 ">Employee Code</label>
                                    <input
                                        type="text"
                                        className="border border-gray-300 p-2 rounded-md w-full col-span-2"
                                        placeholder="DS3862"
                                        disabled
                                    />
                                </div>



                                {/* Date of Joining and Department */}
                                <div className='grid grid-cols-3 gap-2'>

                                    <label className="block text-sm font-medium mb-1">Date of Joining</label>
                                    <input
                                        type="date"
                                        className="col-span-2 border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"

                                    />


                                </div>





                                {/* Email and Skype */}
                                <div className='grid grid-cols-3 gap-2'>

                                    <label className="flex text-sm font-medium mb-1 ">E-mail (Official)*</label>

                                    <input
                                        type="email"
                                        className="col-span-2 border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                        placeholder="mohd.amir@dotsquares.com"
                                    />


                                </div>
                                {/* Email and Skype */}
                                <div className='grid grid-cols-3 gap-2'>

                                    <label className="flex text-sm font-medium mb-1 ">Mobile No.</label>

                                    <input
                                        type="number"
                                        className="col-span-2 border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                        placeholder="656266****"
                                    />


                                </div>
                                {/* Skype ID */}

                                {/* Address */}
                                <div className="grid grid-cols-3 gap-2">
                                    <label className="block text-sm font-medium mb-1">Address</label>
                                    <textarea
                                        className="col-span-2 border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full resize-none"
                                        placeholder="A-16, Madina Nagar, Kho-Nagoriyan Road, Sanganer, Jaipur, Rajasthan-302003"
                                        rows="3"
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <label className="block text-sm font-medium mb-1 ">Address</label>
                                    <textarea
                                        className="col-span-2 border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full resize-none"
                                        placeholder="A-16, Madina Nagar, Kho-Nagoriyan Road, Sanganer, Jaipur, Rajasthan-302003"
                                        rows="3"
                                    />
                                </div>


                            </div>
                            <h2 className='text-xl font-normal my-4'>Where abouts in last 15 Days</h2>

                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-4 sm:gap-y-6 gap-y-1 my-3'>
                                    <div className='sm:col-span-1 col-span-3'>
                                        <label className="block text-sm  font-medium mb-1">Were you in Jaipur since last 15 days</label>
                                    </div>

                                    <div className="sm:col-span-2 col-span-3 flex flex-wrap gap-x-3">
                                        <label>
                                            <input type="radio" name="sincestatus" className="mr-1" /> Yes
                                        </label>
                                        <label>
                                            <input type="radio" name="sincestatus" className="mr-1 " /> No
                                        </label>
                                    </div>

                                    
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-4 sm:gap-y-6 gap-y-1 my-3'>
                                
                                    
                                        <label className="sm:col-span-1 col-span-3 block text-sm  font-medium mb-1">What was your location?</label>
                                    

                                    <input
                                        type="text"
                                        className="sm:col-span-2 col-span-3 border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md max-w-[300px]"
                                        placeholder="jaipur"
                                    />
                                    
                                
                            </div>
                            <h2 className='text-xl font-normal my-4'>Health Status</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-4 sm:gap-y-6 gap-y-1 my-3'>
                                
                                    <div className='lg:col-span-1 sm:col-span-2 col-span-3'>
                                        <label className="block text-sm  font-medium mb-1">Did you come across any disease or symptoms of fever, cough, cold in last 15 days?</label>
                                    </div>

                                    <div className="lg:col-span-2 sm:col-span-1 col-span-3 w-full flex flex-wrap gap-x-3">
                                        <label>
                                            <input type="radio" name="disease" className="mr-1" /> Yes
                                        </label>
                                        <label>
                                            <input type="radio" name="disease" className="mr-1 " /> No
                                        </label>
                                    </div>

                                    
                                
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-4 sm:gap-y-6 gap-y-1 my-3'>
                                
                                    <div className='lg:col-span-1 sm:col-span-2 col-span-3'>
                                        <label className="block text-sm  font-medium mb-1">Did you come across any disease or symptoms of fever, cough, cold in last 15 days?</label>
                                    </div>

                                    <div className="lg:col-span-2 sm:col-span-1 col-span-3 w-full flex flex-wrap gap-x-3">
                                        <label>
                                            <input type="checkbox" name="disease" className="mr-1" /> Yes
                                        </label>
                                        <label>
                                            <input type="checkbox" name="disease" className="mr-1 " /> No
                                        </label>
                                        <label>
                                            <input type="checkbox" name="disease" className="mr-1" /> Yes
                                        </label>
                                        <label>
                                            <input type="checkbox" name="disease" className="mr-1 " /> No
                                        </label>
                                    </div>

                                    
                                
                            </div>
                            <h2 className='text-xl font-normal my-4'>Declaration*</h2>
                            <p className=''>I <span className='underline underline-offset-4 font-medium'>Mohd. Amir Khan</span> hereby, acknowledge that I understand and accept all rules, regulations and guidelines to be followed in ofﬁce. I also acknowledge that the above information is true and valid to the best of my knowledge.</p>
                            <div className='my-3 flex justify-end'>
                            <button type="button" className='rounded-md bg-orange-400 text-white p-2 hover:bg-black transition-all duration-700 ease-in-out text-sm font-semibold'>SEARCH</button>
                            </div>
                        </form>
                    </div>



                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SelfDeclaration