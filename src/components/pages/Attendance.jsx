import React from 'react'
import Navbar from '../common/Navbar';

import Footer from '../common/Footer'

const Attendance = () => {
  return (
    <>
    <Navbar/>
    <div className='xl:px-12 px-3'>
                <div className='container-xl mx-auto min-h-[80vh] my-3 gap-2 bg-white px-4 py-8 '>
                    <div className='md:flex justify-between mb-4'>
                        <div className='text-xl font-semibold mb-2'>
                            <h1>Manage Attendance
                            </h1>
                        </div>
                        <div className="flex flex-wrap items-center w-full sm:w-auto">
                                <div className="flex w-full sm:w-[300px]">
                                    <select
                                        className="border border-gray-300 focus:outline-none focus:shadow p-2 flex-grow text-gray-600"
                                    >
                                        <option value="">Select Employee</option>
                                        <option value="All Employee">All Employee</option>
                                        <option value="Sunil Kumar">Sunil kumar</option>
                                    </select>
                                </div>
                            </div>
                    </div>
                    <div className='mb-3'>
                        <h4 className='font-semibold'>Notes:</h4>
                        <ul className='list-disc pl-5 font-sans space-y-1'>
                            <li className='text-sm'>Attendance can be checked for last 30 days only.</li>
                            <li className='text-sm'>Since the system will be updated daily, in-case of missing in/out punch, an automated email will be sent regarding information for same.</li>
                            <li className='text-sm'>Employee has to report same day for missed punch. Any requests raised later shall not be entertained.</li>
                            <li className='text-sm'>Any Single punch found (In/Out), shall be marked Absent automatically, advised to keep a check for same (Applies for Saturdays also).</li>
                            <li className='text-sm'>In-case you are unable to mark attendance on biometric due to skin or any other problem, please inform HR regarding same & send an email with cc to your respective PM/TL.</li>
                            <li className='text-sm'>Attendance for previous day will be updated between 11am-04pm, till that time it will display as “ In Process”</li>
                            <li className='text-sm'>Sometimes, due to technical issues attendance might not get updated within specified time, please check next day.</li>
                            <li className='text-sm'>Saturdays will be marked as present on completion of 4 hours with both In/Out punch available.</li>

                        </ul>
                    </div>
                    
                    <div className='overflow-x-auto'>
                <table className="min-w-full my-3 divide-y divide-gray-200 border border-gray-300">
                  <thead className="bg-gray-800 ">
                    <tr>
                    <th scope="col" className="p-3 text-left text-sm font-medium text-white uppercase tracking-wider border border-gray-200">DATE</th>
                      <th scope="col" className="p-3 text-left text-sm font-medium text-white uppercase tracking-wider border border-gray-200">Status</th>
                      
                     
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 font-semibold">
                    <tr className='bg-gray-50' >
                    <td className="p-3 text-md border-r border-gray-200">Sep 20, 2024</td>
                      <td className="p-3 text-sm">
                        In Process
                      </td>
                    </tr>
                    <tr  >
                    <td className="p-3 text-md border-r border-gray-200">Sep 20, 2024</td>
                      <td className="p-3 text-sm font-semibold">
                        In Process
                      </td>
                    </tr>
                    <tr className='bg-red-500 text-white ' >
                    <td className="p-3 text-md border-r border-gray-200">Oct 19, 2024</td>
                      <td className="p-3 text-sm ">
                        Holiday (Dushhera)
                      </td>
                    </tr>
                    <tr  >
                    <td className="p-3 text-md border-r border-gray-200">Sep 20, 2024</td>
                      <td className="p-3 text-sm font-semibold">
                        In Process
                      </td>
                    </tr>


                  </tbody>

                </table>

              </div>
                        
                    </div>
                </div>
                <Footer/>
    </>
  )
}

export default Attendance